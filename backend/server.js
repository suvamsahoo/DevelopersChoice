import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/DevelopersChoice",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";

app.use("/api/users", userRouter);
app.use('/api/products', productRouter);

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
