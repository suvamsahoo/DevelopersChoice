import express from "express";
import mongoose from 'mongoose';
const app = express();
mongoose.connect(
  'mongodb://localhost/DevelopersChoice',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

import data from "./data.js";
import userRouter from "./routers/userRouters.js";

//To get product data-:
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

//To get products data-:
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use('/api/users', userRouter);

app.get("/", (req, res) => {
  res.send("server is ready");
});

//This middleware used for error catcher-:
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
