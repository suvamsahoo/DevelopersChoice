import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import User from "../models/userModel.js";

const userRouter = express.Router();

/* http://localhost:5000/api/users/seed in this API we are adding users data in mongoDB database. */
userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    /* remove all users data in mongoDB */
     // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

export default userRouter;
