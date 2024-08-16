import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  return hashedPass;
};

export const comparePassword = async (password, hashedPass) => {
  const isMatch = bcrypt.compare(password, hashedPass);
  return isMatch;
};
