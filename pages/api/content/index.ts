import { NextApiRequest, NextApiResponse } from "next";

import db from "./db.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(db);
}
