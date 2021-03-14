import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from 'bcryptjs';
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

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

/* http://localhost:5000/api/users/signin in this API we can find user */
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

export default userRouter;
