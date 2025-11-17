import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.lib.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const userId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );
    return res.status(200).json({ users: filteredUsers });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const userId = req.user._id;
    const otherUserId = req.params.id;

    const messages = await Message.find({
      $or: [
        { sender: userId, receiver: otherUserId },
        { sender: otherUserId, receiver: userId },
      ],
    });

    return res.status(200).json({ messages });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params.id;
    const senderId = req.user._id;

    let mediaUrl = null;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      mediaUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      sender: senderId,
      receiver: receiverId,
      text,
      image: mediaUrl,
    });

    await newMessage.save();

    return res.status(201).json({ message: newMessage });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
