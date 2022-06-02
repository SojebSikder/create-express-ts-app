import express from "express";
import { UserController } from "../controllers/user/user.controller";

import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse";

const router = express.Router();
const controller = new UserController();

router.get("/login", controller.showLoginPage);
router.post("/login", decorateHtmlResponse("login"), controller.login);
router.get("/register", controller.showRegisterPage);
router.post("/register", controller.register);
router.get("/logout", controller.logout);
router.get("/profile", controller.showProfilePage);

export default router;
