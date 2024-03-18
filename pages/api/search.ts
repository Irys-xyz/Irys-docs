import { NextApiRequest, NextApiResponse } from "next";

import FlexSearch from "flexsearch";
import db from "./db.json";

function findSnippetAroundKeyword(text: string, keyword: string) {
  const CHARACTER_AROUND = 20; // Adjust to use characters instead of words around

  // Convert text to lowercase for case-insensitive search
  const lowerText = text.toLowerCase();
  const lowerKeyword = keyword.toLowerCase();

  let startIndex = lowerText.indexOf(lowerKeyword);

  if (startIndex === -1) {
    return "Keyword not found";
  }

  // Calculate start and end positions for the snippet
  let snippetStart = Math.max(startIndex - CHARACTER_AROUND, 0);
  let snippetEnd = Math.min(
    startIndex + keyword.length + CHARACTER_AROUND,
    text.length
  );

  // Determine whether ellipses should be added before/after the snippet
  let snippetPrefix = snippetStart > 0 ? "..." : "";
  let snippetSuffix = snippetEnd < text.length ? "..." : "";

  // Extract and return the snippet with potential ellipses
  return (
    snippetPrefix + text.substring(snippetStart, snippetEnd) + snippetSuffix
  );
}

const allowCors = (res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Allowed methods
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Allowed headers
};

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

  allowCors(res);

  const results = index.search(q, { limit: 10 });

  const searchResults = results.map((id: any) => {
    return {
      path: db[id].path,
      description: db[id].description,
      preview: findSnippetAroundKeyword(db[id].content, q).replace(
        new RegExp(q, "gi"),
        (match: string) => `<b className="font-bold"><u>${match}</u></b>`
      ),
    };
  });

  // Respond with search results
  res.status(200).json(searchResults);
};
