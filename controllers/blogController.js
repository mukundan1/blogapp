const blog = require('../models/blog');


exports.getallblogs = async (req, res) => {
    try {
        // console.log("User_ID:",req.user.id);
        const blogs = await blog.getallblogs();
        console.log(blogs)
        return res.status(200).json(blogs);
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error fetching blogs!' });
    }
};


// exports.getbyuser = async (req, res) => {
//     try {
//         const k = parseInt(req.params.id);
//         // const l = req.body.user_id ;
//         console.log("User_ID:",req.params.id);
//         const blogss = await blog.getbyuser(k);
//         console.log(blogss, k)// , l)
//         return res.status(200).json(blogss);
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ message: 'Error fetching blogs!' });
//     }
// };


exports.createblog = async (req, res) => {
    try {
        const { title, blog: blogContent } = req.body;

        if (!title || !blogContent) {
            return res.status(400).json({ message: 'Title and blog content are required!' });
        }

        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: 'User authentication required!' });
        }

        await blog.createblog(req.user.id, title, blogContent);
        console.log('Blog created:', { userId: req.user.id, title, blogContent });
        return res.status(201).json({ message: 'blog created successfully!'});

    } catch (error) {
        console.log(error)
        console.error('Error creating blog:', error);
        return res.status(500).json({ message: 'Error creating blog!'});
    }
};

exports.updateblog = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updated = await blog.updateblog(req.user.id, id, updates);
        if (!updated) {
            return res.status(404).json({ message: 'blog not found or not owned by user!' });
        }

        return res.status(200).json({ message: 'blog updated successfully!' });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error updating blog!' });
    }
};

exports.deleteblog = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await blog.deleteblog(req.user.id, id);
        if (!deleted) {
            return res.status(404).json({ message: 'blog not found or not owned by user!' });
        }

        return res.status(200).json({ message: 'blog deleted successfully!' });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error deleting blog!' });
    }
};