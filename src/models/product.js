const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    trim: true,
    maxLength: [100, "product name cannot exceed 5 character"],
    default: 0.0,
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
    maxLength: [5, "product name cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0.0,
  },
  images: [
    {
      public_id: {
        type: String,
        // required: true,
      },
      uri: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please select category for this product"],
    // enum: {
    //   values: [
    //     "Electronics",
    //     "Cameras",
    //     "Laptop",
    //     "Accesories",
    //     "Headphones",
    //     "Food",
    //     "Books",
    //     "Clothes/Shoes",
    //   ],
    //   message: "please select correct category for the product",
    // },
  },
  seller: {
    type: String,
    required: [true, "please enter product seller"],
  },
  stock: {
    type: Number,
    required: [true, "please enter product stock"],
    maxLength: [5, "product stock cannot exceed 5 characters "],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    requred: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.models.product || mongoose.model("product", productSchema);
