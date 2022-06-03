import express from "express";
import { PostController } from "../controllers/post/post.controller";
import { PostService } from "../controllers/post/post.service";

import { decorateHtmlResponse } from "../middlewares/common/decorateHtmlResponse";

const router = express.Router();
const controller = new PostController(new PostService());

router.get("/", decorateHtmlResponse(), controller.index);
router.get("/post/add", decorateHtmlResponse(), controller.showAddPostPage);
router.post("/post/add", decorateHtmlResponse(), controller.store);
router.get("/post/:id", decorateHtmlResponse(), controller.show);

export default router;
