import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../utils/database";

interface ErrorResponseType {
  error: string;
}

interface SuccessResponseType {
  _id: string;
  name: string;
  email: string;
  cellphone: string;
  teacher: boolean;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SuccessResponseType>
): Promise<void> => {
  if (req.method === "POST") {
    const { name, email, cellphone, teacher } = req.body;
    if (!name || !email || !cellphone || !teacher) {
      return res
        .status(400)
        .json({ error: "Some request parameters are missing." });
    }

    const { db } = await connectToDatabase();
    const dbResponse = await db
      .collection("users")
      .insertOne({ name, email, cellphone, teacher });
    return res.status(200).json(dbResponse.ops[0]);
  }
  return res.status(400).json({ error: "Wrong request method." });
};
