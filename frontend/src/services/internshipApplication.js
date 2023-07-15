import axios from 'axios';

const BASE_URL = 'http://localhost:8080'; // Replace with your API base URL

export const submitInternshipApplication = async (applicationData, file) => {
  try {
    const formData = new FormData();
    formData.append('name', applicationData.name);
    formData.append('email', applicationData.email);
    formData.append('phoneNumber', applicationData.phoneNumber);
    formData.append('faculty', applicationData.faculty);
    formData.append('internshipDuration', applicationData.internshipDuration);
    formData.append('message', applicationData.message);
    formData.append('cv', file);

    const response = await axios.post(`${BASE_URL}/internship-applications`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('An error occurred while submitting the internship application');
  }
};

export const getAllInternshipApplications = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/internship-applications`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while retrieving the internship applications');
  }
};
