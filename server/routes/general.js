import express, { Router } from "express";
import {
  getUsers,
  getUser,
  getDashboardStats,
} from "../controllers/general.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
