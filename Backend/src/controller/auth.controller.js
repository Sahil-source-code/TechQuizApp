const usermodel = require("../models/user.model");
const tokenBlacklistModel = require("../models/blacklist.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  try {
    const { name, email, phoneNumber, password, branch } = req.body;

    // 1. Validation: Sabhi fields check karein
    if (!name || !email || !phoneNumber || !password || !branch) {
      return res.status(400).json({
        message: "Please fill all fields: name, email, phoneNumber, password, and branch",
      });
    }

    // 2. Check karein user pehle se exist karta hai ya nahi (Email ya Phone Number se)
    const existingUser = await userModel.findOne({
      $or: [{ email }, { phoneNumber }],
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists with this email or phone number",
      });
    }

    // 3. Password hash karein
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Naya User Create karein
    const user = await userModel.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
      branch,
    });

    // 5. JWT Token generate karein
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    // 6. Cookie set karein
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
    });

    // 7. Success response
    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        branch: user.branch,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error during registration",
      error: error.message,
    });
  }
}
/**
 * @name  logincontroller
 * @description  lohin a user
 * @access   public
 */
async function loginController(req, res) {
  const { email, password } = req.body;
  const user = await usermodel.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "Invaklid email ",
    });
  }
  const ispasswordvalid = await bcrypt.compare(password, user.password);
  if (!ispasswordvalid) {
    return res.status(400).json({
      message: "invalid password ",
    });
  }
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2d" },
  );
  console.log("LOGIN CONTROLLER HIT");
  console.log("EMAIL:", email);
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 2 * 24 * 60 * 60 * 1000,
  });
  console.log("COOKIE SET");
  res.status(200).json({
    message: "user loggedin successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
async function logoutuserController(req, res) {
  const token = req.cookies.token;
  if (token) {
    await tokenBlacklistModel.create({ token });
  }
  res.clearCookie("token");
  res.status(200).json({
    message: "user logged out successfully",
  });
}

async function getmeController(req, res) {
  const user = await userModel.findById(req.user.id);
  res.status(200).json({
    message: "user detail fetched",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
module.exports = {
  registerController,
  loginController,
  logoutuserController,
  getmeController,
};
