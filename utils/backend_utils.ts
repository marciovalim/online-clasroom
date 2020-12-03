import { NextApiResponse, NextApiRequest } from "next";
import { getSession } from "next-auth/client";
export default class BackendUtils {
  static wronRequestMethodError(res: NextApiResponse<any>): void {
    return res.status(400).json({ error: "Wrong request method." });
  }

  static unaunthenticatedError(res: NextApiResponse<any>): void {
    return res.status(400).json({ error: "Please authenticate first." });
  }

  static async requestIsAuthenticated(req: NextApiRequest) {
    return (await getSession({ req })) !== null;
  }
}
