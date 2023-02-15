import axios from "axios";

const backendUrl = "http://localhost:5000";

export async function submitEntry(currentFormData) {
  try {
    const response = await axios.post(`${backendUrl}/entries`, currentFormData);
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function getEntries() {
  const response = await axios.get(`${backendUrl}/entries`);
  try {
    return response;
  } catch (e) {
    console.log(e);
  }
}
