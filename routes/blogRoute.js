const express =require("express");
const { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog} = require("../controller/blogCtrl");
const router =express.Router();

const { authMiddleware, isAdmin } = require("../middleware/authMiddleware");


router.post('/', authMiddleware,isAdmin,createBlog);
router.put("/:id",authMiddleware,isAdmin, updateBlog);
router.get("/:id",getBlog);
router.delete("/:id",authMiddleware,isAdmin,deleteBlog);
router.get("/",getAllBlogs);

module.exports=router;