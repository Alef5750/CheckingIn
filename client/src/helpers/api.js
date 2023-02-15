import axios from "axios";

const backendUrl = "http://localhost:5000";

export const submitEntry = async (currentFormData) => {
  const response = await axios.post(`${backendUrl}/entries`, currentFormData);
  try {
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getEntries = async () => {
  const response = await axios.get(`${backendUrl}/entries`);
  try {
    return response;
  } catch (e) {
    console.log(e);
  }
};
