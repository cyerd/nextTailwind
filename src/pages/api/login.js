import dbConnect from "../../dbConnect";
import User from "../../models/user";
import { sign } from "jsonwebtoken";

import  cookie from "cookie";

export default async function handler(req, res, next) {
  const { method } = req;
  const { email, password } = req.body;
  // checks if password is correct

  await dbConnect();

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  if (req.method === "POST") {
    try {
      const user = await User.findOne({ email }).select("+password");
      const tokenData = {
        id: user._id,
        name: user.name,
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
      };
      const ispasswordMatched = await user.comparePassword(password);

      const jwt = sign(tokenData, process.env.SECRET_KEY);
  

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "No user found",
        });
      } else if (!ispasswordMatched) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid Email or Password" });
      }
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", jwt, {
          httpOnly: true,
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );
      res.status(200).json({ success: true, message: jwt });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "invalid credentials",
        statusCode: 401,
      });
    }
  }
}
