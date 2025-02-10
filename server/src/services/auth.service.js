import User from "../models/user.model.js";

const createUser = async ({ username, email, password }) => {
  return await User.create({ username, email, password });
};

const isUserExists = async ({ username, email }) => {
  return await User.findOne({
    $or: [{ username }, { email }],
  });
};

const isPasswordCorrect = async ({ email, password }) => {
  const user = await User.findOne({ email });

  return await user.comparePassword(password);
};


export {
  createUser,
  isUserExists,
  isPasswordCorrect,
};
