import { Router } from "express";
import { getPosts, createPost, updatePosts, deletePosts,  getPost } from "../controllers/posts.controllers.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", createPost);
router.put("/posts/:id", updatePosts);
router.delete("/posts/:id", deletePosts);


export default router;
