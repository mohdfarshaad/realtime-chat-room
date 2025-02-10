import User from "../models/user.model.js";

const generateAccessAndRefreshToken = async (email) => {
  const user = await User.findOne({ email });

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};

const clearRefreshToken = async (userId) => {
  return await User.findByIdAndUpdate(
    userId,
    {
      $set: { refreshToken: undefined },
    },
    { new: true }
  );
};

export { generateAccessAndRefreshToken, clearRefreshToken };
