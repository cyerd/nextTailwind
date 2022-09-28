import dbConnect from "../../dbConnect";
import User from "../../models/user";

const catchAsyncError = require("../../middlewares/catchAsyncError");
const ErrorHandler = require("../../utils/errorHandler");
const sendToken = require("../../utils/jwtToken");
const sendEmail = require("../../utils/sendEmail");
const crypto = require("crypto");

export default async function handler(req, res) {
  const { method } = req;
  const { name, email, password } = req.body;

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        const user = await User.create({
          name,
          email,
          password,
          avatar: {
            public_id: "MHN0-R-WaZeDVUw=s32-c-mo",
            url: "https://lh3.googleusercontent.com/ogw/ADea4I7wb6v3WkS28hIjf4nYrDlgsh_MHN0-R-WaZeDVUw=s32-c-mo",
          },
        });
        sendToken(user, 200, res);
        res.status(200).json({ success: true, user });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false, message: "default" });
  }
}
