const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    branch: {
      type: String,
      required: [true, "Branch is required"],
      enum: {
        values: [
          "Civil Engineering",
          "Electrical Engineering",
          "Information Technology",
        ],
        message: "Branch must be Civil Engineering, Electrical Engineering, or Information Technology",
      },
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"], // Future use ke liye role options restrict kiye gaye hain
    },
  },
  {
    timestamps: true, // CreatedAt aur updatedAt dates automatically save karega
  }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;