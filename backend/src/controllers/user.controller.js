import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { fullName, password, email } = req.body;

  if ([fullName, password, email].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Invalid user data");
  }

  const isUserExists = await User.findOne({
    $or: [{ email }],
  });

  // console.log(isUserExists);
  if (isUserExists) {
    throw new ApiError(409, "User with this email already exists");
  }

  const createUser = await User.create({
    fullName,
    email,
    password,
  });

  if (!createUser) {
    throw new ApiError(500, "Something went wrong while creating the user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createUser, "User registered successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "Invalid user credentials");
  }

  const user = await User.findOne({ email: email });

  console.log(user);
  if (!user) {
    throw new ApiError(409, "User with this email id is not present");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);
  console.log(isPasswordCorrect);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid password");
  }

  const sendUser = await User.findById(user?._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .json(new ApiResponse(200, sendUser, "User Logged In successfully"));
});

export { registerUser, loginUser };
