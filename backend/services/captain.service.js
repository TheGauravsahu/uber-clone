import captainModel from "../models/captain.model.js";

export const createCaptain = async ({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) => {
  try {
    if (
      !firstName ||
      !email ||
      !password ||
      !color ||
      !plate ||
      !capacity ||
      !vehicleType
    ) {
      throw new Error("All fields are required");
    }

    const captain = await captainModel.create({
      name: {
        firstName,
        lastName,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });

    return captain;
  } catch (error) {
    console.log("Error while creating captain", error);
  }
};
