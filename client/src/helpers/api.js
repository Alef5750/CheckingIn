import axios from "axios";

const backendUrl = "http://localhost:5000";

export const submitEntry = async (currentFormData) => {
  console.log("submitEntry()");
  await axios
    .post(`${backendUrl}/entries`, currentFormData)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getEntries = async () => {
  const response = await axios.get(`${backendUrl}/entries`);
  if (response) {
    return response;
  }
};
