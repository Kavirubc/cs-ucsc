//This is not in use. Using the schema in the app.js file

import mongoose from "mongoose";
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
const blogs = mongoose.model('blogs', blogPostSchema);