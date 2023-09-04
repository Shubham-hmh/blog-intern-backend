const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createBlog = asyncHandler(async (req, res) => {

    try {
        const newBlog = await Blog.create(req.body);
        res.json(newBlog)

    } catch (error) {
        throw new Error(error);

    }

});


const updateBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const newBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.json(newBlog)

    } catch (error) {
        throw new Error(error);

    }

});

const getBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        const newBlog = await Blog.findById(id).populate("likes").populate("dislikes");
        await Blog.findByIdAndUpdate(id, { $inc: { numViews: 1 }, }
            , { new: true }
        )
        res.json(newBlog)

    } catch (error) {
        throw new Error(error);

    }

});

const getAllBlogs = asyncHandler(async (req, res) => {

    try {
        const newBlog = await Blog.find();

        res.json(newBlog)

    } catch (error) {
        throw new Error(error);

    }

});

const deleteBlog = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);

    try {
        await Blog.findByIdAndDelete(id);

        res.json("Blog deleted")

    } catch (error) {
        throw new Error(error);

    }

});






module.exports = { createBlog, updateBlog, getBlog, getAllBlogs, deleteBlog };