import { NextApiRequest, NextApiResponse } from "next";
import ErrorResponseModel from "../../models/error_response_model";
import UserModel from "../../models/user_model";
import DatabaseUtils from "../../utils/database_utils";
import BackendUtils from "../../utils/backend_utils";
import { ObjectID } from "mongodb";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseModel | UserModel>
): Promise<void> => {
  if (req.method === "POST") {
    const user = new UserModel(req.body);
    if (!user.validateParameters()) {
      return res
        .status(400)
        .json({ error: "Some request parameters are missing." });
    }

    const usersCollection = await DatabaseUtils.getUsersCollection();
    await usersCollection.insertOne(user);
    return res.status(200).json(user);
  }
  if (req.method == "GET") {
    const { email, id } = req.body;
    if (!email && !id) {
      return res.status(400).json({
        error: "You need to pass at least an email or an id parameter",
      });
    }
    if (!email && !DatabaseUtils.idIsValid(id)) {
      return res.status(400).json({ error: "The passed id is invalid" });
    }

    const usersCollection = await DatabaseUtils.getUsersCollection();
    const query = email ? { email } : { _id: new ObjectID(id) };
    const response = await usersCollection.findOne(query);

    if (!response) {
      return res.status(400).json({ error: "User not found in database" });
    }

    return res.status(200).json(response);
  }

  return BackendUtils.wronRequestMethodError(res);
};
