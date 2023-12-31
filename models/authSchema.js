import express from "express";
import mongoose from "mongoose";

const authSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", authSchema);
