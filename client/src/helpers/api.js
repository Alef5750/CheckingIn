import axios from "axios";

const backendUrl = "http://localhost:5000";

export async function submitEntry(currentFormData) {
  const response = await axios.post(`${backendUrl}/entries`, currentFormData);
  try {
    return response;
  } catch (e) {
    console.log(e);
    response.status(400).send("Unable to GET entries");
  }
}

export async function getEntries() {
  const response = await axios.get(`${backendUrl}/entries`);
  try {
    return response;
  } catch (e) {
    console.log(e);
    response.status(400).send("Unable to GET entries");
  }
}
