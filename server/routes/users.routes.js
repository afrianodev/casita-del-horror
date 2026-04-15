import { Router } from "express";
import * as usersController from "../controllers/users.controller.js";

const router = Router();

router.get("/", usersController.listUsers);
router.get("/:userId", usersController.getUserById);

export default router;
