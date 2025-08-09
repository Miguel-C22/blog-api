const Blog = require("../models/blog.model");

exports.createBlog = async (request, response) => {
  const { userId, title, author, blog } = request.body;

  if (!userId || !title || !author || !blog) {
    return response.status(400).json({ message: "All Fields are required" });
  }

  try {
    const postBlog = await Blog.create({
      userId,
      title,
      author,
      blog,
    });
    response
      .status(201)
      .json({ message: "Blog successfully created! ", postBlog });
  } catch (error) {
    console.log("Failed to create blog", error);
    response
      .status(500)
      .json({ message: "Failed to create blog", error: error.message });
  }
};

exports.deleteBlog = async (request, response) => {
  const id = request.body.id;

  if (!id) {
    response.status(400).json({
      message: "Failed to grab id of the item you are trying to delete",
    });
  }

  try {
    await Blog.destroy({
      where: {
        id,
      },
    });
    return response.status(200).json({ message: `Successfully removed blog` });
  } catch (error) {
    console.log("Failed to delete blog ", id, error);
    return response
      .status(200)
      .json({ message: "Failed to delete blog ", id, error: error.message });
  }
};

exports.editBlog = async (request, response) => {
  const { id, userId, title, author, blog } = request.body;

  try {
    await Blog.update(
      {
        title,
        author,
        blog,
      },
      {
        where: {
          userId,
          id,
        },
      }
    );
    response.status(200).json({ message: "Successfully updated blog" });
  } catch (error) {
    console.log("Failed to update blog ", id, error);
    return response
      .status(200)
      .json({ message: "Failed to update blog ", id, error: error.message });
  }
};

exports.getBlog = async (request, response) => {
  const { id, userId } = request.body;

  if (!id || !userId) {
    response.status(400).json({
      message: "Failed to get blog",
    });
  }

  try {
    const blog = await Blog.findOne({
      where: {
        id,
        userId,
      },
    });
    response.status(200).json({ message: "Successfully grabbed blog", blog });
  } catch (error) {
    console.log("Failed to get blog ", id, error);
    return response
      .status(200)
      .json({ message: "Failed to get blog ", id, error: error.message });
  }
};

exports.getAllBlogs = async (request, response) => {
  const { userId } = request.body;

  if (!userId) {
    console.log("Failed to grab all users blogs");
  }

  try {
    const allUsersBlogs = await Blog.findAll({
      where: {
        userId,
      },
    });
    response
      .status(200)
      .json({ message: "Successfully grabbed all users", allUsersBlogs });
  } catch (error) {
    console.log("Failed to get all blogs ", id, error);
    return response
      .status(200)
      .json({ message: "Failed to get all blogs ", id, error: error.message });
  }
};
