import mongoose from "mongoose";
import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};
