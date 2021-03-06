"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./User');
const commentSchema = new Schema({
    author: userSchema,
    text: String,
    timestamp: { type: Date, default: Date.now() },
    edited: {
        type: Boolean,
        default: false,
    },
    replies: [this],
});
exports.default = commentSchema;
