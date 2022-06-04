import express from "express";
import { PostController } from "../controllers/post/post.controller";

import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse";
import { Data } from "../models/Data";
import { Mail } from "../system/core/Email";
import { Redis } from "../system/database/facade/Redis";

const router = express.Router();
const controller = new PostController();

router.get("/", decorateHtmlResponse(), controller.index);
router.get("/post/add", decorateHtmlResponse(), controller.showAddPostPage);
router.post("/post/add", decorateHtmlResponse(), controller.store);
router.get("/post/:id", decorateHtmlResponse(), controller.show);

export default router;
