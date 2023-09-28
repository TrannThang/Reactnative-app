const express = require("express");
const { requireSignIn } = require("../controllers/userControllers");
const {
  createPostController,
  getAllPostsController,
  getUserPostController,
  deletePostController,
  updatePostController,
} = require("../controllers/postControllers");

const router = express.Router();

router.post("/create-post", requireSignIn, createPostController);

router.get("/get-all-post", getAllPostsController);

router.get("/get-user-post", requireSignIn, getUserPostController);
router.delete("/delete-post/:id", requireSignIn, deletePostController);
router.put("/update-post/:id", requireSignIn, updatePostController);

module.exports = router;
