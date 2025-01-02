import userModel from "../models/user.model.js";

export const createUser = async ({ firstName, lastName, email, password }) => {
  try {
    if (!firstName || !email || !password) {
      throw new Error("All fields are required");
    }

    const user = await userModel.create({
      name: {
        firstName,
        lastName,
      },
      email,
      password,
    });

    return user;
  } catch (error) {
    console.log("Error while creating user", error);
  }
};
