import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

/* http://localhost:5000/api/products/ in this API we are getting products data from mongoDB */
productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

/* http://localhost:5000/api/products/seed in this API we are adding products data in mongoDB database. */
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    /* remove all products data in mongoDB */
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

/* http://localhost:5000/api/products/:id in this API we are getting product data from mongoDB */
productRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default productRouter;
