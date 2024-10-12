import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  const { name, handle } = req.body;

  const images = req.files.map((file) => ({
    filename: file.filename,
    path: file.path,
  }));

  try {
    const user = new User({
      name,
      handle,
      images,
    });

    await user.save();
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error Occur",
      error,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error,
    });
  }
};
