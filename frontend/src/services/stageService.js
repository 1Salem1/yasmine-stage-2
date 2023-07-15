import axios from 'axios';

const API_URL = 'http://localhost:8080'; 

export const createStage = async (stageData) => {
  try {
    const response = await axios.post(`${API_URL}/create-stage`, stageData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const getAllStages = async () => {
  try {
    const response = await axios.get(`${API_URL}/stages`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const getStageById = async (stageId) => {
  try {
    const response = await axios.get(`${API_URL}/stages/${stageId}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const updateStage = async (stageId, stageData) => {
  try {
    const response = await axios.put(`${API_URL}/stages/${stageId}`, stageData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data);
  }
};

export const deleteStage = async (stageId) => {
  try {
    await axios.delete(`${API_URL}/stages/${stageId}`);
  } catch (error) {
    throw new Error(error.response.data);
  }
};
