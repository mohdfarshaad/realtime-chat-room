import {
  createUser,
  isPasswordCorrect,
  isUserExists,
} from "../services/auth.service.js";
import {
  clearRefreshToken,
  generateAccessAndRefreshToken,
} from "../services/token.service.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const signUp = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!(username && email && password)) {
    throw new ApiError(400, "Bad Request");
  }

  const existingUser = await isUserExists({ username, email });

  if (existingUser) {
    throw new ApiError(409, "Conflict : Duplicate Entry");
  }

  const createdUser = await createUser({ username, email, password });

  res
    .status(201)
    .json(new ApiResponse(201, createdUser, "Sign up successfull"));
});

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email && password)) {
    throw new ApiError(400, "Bad Request");
  }

  const existingUser = await isUserExists({ email });

  if (!existingUser) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await isPasswordCorrect({ email, password });

  if (!isPasswordValid) {
    throw new ApiError(400, "Bad Request");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    email
  );

  if (!(accessToken && refreshToken)) {
    throw new ApiError(500, "Something went wrong");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { existingUser, accessToken, refreshToken },
        "Sign in successfull"
      )
    );
});

const signOut = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(401, "Unauthorized request");
  }

  const clearToken = clearRefreshToken(userId);

  if (!clearToken) {
    throw new ApiError(500, "Something went wrong");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, userId, "Sign out successfull"));
});

export { signUp, signIn, signOut };
