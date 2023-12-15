const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://ksrx-1:L8YSKHXizScVJ2UP@cluster0.0tfosny.mongodb.net/blogDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Failed to connect to MongoDB Atlas', err));


// Define blog post schema

const blogPostSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,

    },
    desc: {
        type: String,
        required: true,
    },
    blog: {
        type: String,
        required: true,
    },
    writer: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    tag1: {
        type: String,
        required: true,
    },
    tag2: {
        type: String,
        required: false,
    }
});


// Create blog post model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Create Express app
const app = express();
app.use(express.json());

// Get all blog posts
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await BlogPost.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific blog post
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await BlogPost.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Create a new blog post
app.post('/api/posts', async (req, res) => {
    try {
        const post = new BlogPost(req.body);
        await post.save();
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a blog post
app.put('/api/posts/:id', async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a blog post
app.delete('/api/posts/:id', async (req, res) => {
    try {
        const post = await BlogPost.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post not found' });
        res.json({ message: 'Post deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
