import { NextApiRequest, NextApiResponse } from "next";

interface Data {
  message: string;
}

export default (_: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ message: "A api ta funfando" });
};
