import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
// import { formatImage } from "../middleware/multerMiddleware.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });

  // removes password from the user object
  const sanitizedUser = user.toJSON();

  res.status(StatusCodes.OK).json({ user: sanitizedUser });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};

export const updateUser = async (req, res) => {
  const userObj = { ...req.body };
  delete userObj.password;
  delete userObj.role;

  // if image file is present for the avatar, then update the profile image also.
  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    // if successfully uploaded, remove the file from our file system
    await fs.unlink(req.file.path);
    userObj.avatar = response.secure_url;
    userObj.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, userObj);

  // if there is a new image file to update profile and there is an old one in the cloudinary storage, delete the old one.
  // if not then cloudinary will be hosting all the image files that each profile has ever used to update their profile
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
