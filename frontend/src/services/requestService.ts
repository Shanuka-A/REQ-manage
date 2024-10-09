import axios from 'axios';

const API_URL = 'http://localhost:5000/api/requests';

export const getRequests = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createRequest = async (requestData: any) => {
  const response = await axios.post(API_URL, requestData);
  return response.data;
};

export const updateRequest = async (id: string, requestData: any) => {
  const response = await axios.patch(`${API_URL}/${id}`, requestData);
  return response.data;
};

export const deleteRequest = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
