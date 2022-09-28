const Product = require("../models/product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");
const products = require("../data/products");
const catchAsyncError = require("../middlewares/catchAsyncError");

dotenv.config({ path: "backend/config/config.env" });



connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("all Products are deleted");

    await Product.insertMany(products);
    console.log("all products have been added");
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
