import axios from "axios";

const API_URL = "";

export const addUser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (error) {
    console.log("Error while calling adduser api", error.message);
  }
};
