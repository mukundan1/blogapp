const express = require('express');
const blogRouter = express.Router();
const blogController = require("../controllers/blogController");
const authenticateUser = require('../middleware/authMiddleware');

// blogRouter.get('/:id', authenticateUser,blogController.getbyuser);

blogRouter.get('/', authenticateUser,blogController.getallblogs);
blogRouter.post('/', authenticateUser, blogController.createblog);
blogRouter.patch('/:id', authenticateUser, blogController.updateblog);
blogRouter.delete('/:id', authenticateUser, blogController.deleteblog);
module.exports = blogRouter;