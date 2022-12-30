import express, { Router } from "express";
import { getUsers, getUser } from "../controllers/general.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);

export default router;
