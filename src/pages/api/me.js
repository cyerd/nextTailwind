import dbConnect from "../../dbConnect";
import User from "../../models/user";




const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  await dbConnect();
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Login first to acces this resource.",
    });
  }
  const decoded = jwt.verify(token, process.env.SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (req.method === "GET") {
    try {
      const user = await User.findById(req.user.id);
      return res.status(200).json({
        success: true,
        user
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: "invalid credentials",
        statusCode: 401,
      });
    }
  }
}
