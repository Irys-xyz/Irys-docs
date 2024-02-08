import { NextApiRequest, NextApiResponse } from "next";

import Fuse from "fuse.js";
import { finished } from "stream/promises";
import fs from "fs";
import { parse } from "csv-parse";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const query = req.query.q as string;

  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  const processFile = async () => {
    const records: {
      path: string;
      description: string;
      content: string;
    }[] = [];
    const parser = fs.createReadStream(`./pages/api/db.csv`).pipe(parse());
    parser.on("readable", function () {
      let record;
      while ((record = parser.read()) !== null) {
        // Work with each record
        records.push({
          path: record[0].replace(/pages\//, "/").replace(".mdx", ""),
          description: record[1],
          content: record[2],
        });
      }
    });
    await finished(parser);
    return records;
  };

  const records = await processFile();

  const options = {
    keys: ["path", "description", "content"],
    includeScore: false,
    threshold: 0.46, // Adjust this value to control fuzziness
  };

  const fuse = new Fuse(records, options);

  const results = fuse.search(query);

  res.json(
    results.map((result) => {
      return {
        path: result.item.path,
        description: result.item.description,
      };
    })
  );
};

export default handler;
