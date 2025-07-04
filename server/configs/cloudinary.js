// config/cloudinary.js
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const connectCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
  console.log("Cloudinary connected");
};

module.exports = { cloudinary, connectCloudinary };
