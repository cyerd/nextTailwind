// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from "../../dbConnect";
import Product from "../../models/products";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const products = await Product.find({});
        res.status(200).json({
          success: true,
          products,
        });
      } catch (error) {
        res.status(400).json({ success: false, message: error });
      }
      break;

    default:
      res.status(400).json({ success: false });
  }
}