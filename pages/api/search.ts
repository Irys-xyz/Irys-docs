import { NextApiRequest, NextApiResponse } from "next";

import FlexSearch from "flexsearch";
import db from "./db.json";

const index = new FlexSearch.Index({
  tokenize: "forward",
  resolution: 3,
});

db.forEach((doc, id) => {
  const content = `${doc.path} ${doc.description} ${doc.content}`;
  index.add(id, content);
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // Get the query from request
  const { q } = req.query;

  if (!q || typeof q !== "string") {
    res.status(400).json({ error: "Query parameter is required" });
    return;
  }

  const results = index.search(q, { limit: 10 });

  const searchResults = results.map((id: any) => {
    return {
      path: db[id].path,
      description: db[id].description,
    };
  });

  // Respond with search results
  res.status(200).json(searchResults);
};
