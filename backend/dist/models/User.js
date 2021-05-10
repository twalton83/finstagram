"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./Post');
const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    dateOfSignup: { type: Date, default: Date.now },
    private: { type: Boolean, default: false },
    posts: [postSchema],
    followers: [this],
    closeFriends: [this],
    following: [this],
});
exports.default = userSchema;
