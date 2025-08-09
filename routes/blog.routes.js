const express = require("express");
const blogController = require("../controllers/blog.controller");

const router = express.Router();

router.post("/create-blog", blogController.createBlog);
router.delete("/delete-blog", blogController.deleteBlog);
router.patch("/update-blog", blogController.editBlog);
router.get("/get-blog", blogController.getBlog);
router.get("/get-all-users-blogs", blogController.getAllBlogs);

module.exports = router;
