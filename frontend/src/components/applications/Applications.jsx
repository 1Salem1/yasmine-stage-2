import React, { useState, useEffect } from 'react';
import Head from '../common/header/Head';
import Hero from '../home/hero/Hero';
import { getAllInternshipApplications } from '../../services/internshipApplication';
import axios from 'axios';

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const allApplications = await getAllInternshipApplications();
        setApplications(allApplications);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchApplications();
  }, []);

  const downloadCV = async (cvData, cvContentType, cvFilename) => {
    try {
      const url = window.URL.createObjectURL(new Blob([cvData]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', cvFilename);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log('Error downloading CV', error);
    }
  };

  return (
    <>
      <Head />
      <Hero />
      <section className="applications">
        <div className="container">
          <h2>All Applications</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Faculty</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr key={application._id}>
                    <td>{application.name}</td>
                    <td>{application.email}</td>
                    <td>{application.phoneNumber}</td>
                    <td>{application.faculty}</td>
                    <td>{application.internshipDuration}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          downloadCV(application.cv.data, application.cv.contentType, `${application.name}.pdf`)
                        }
                      >
                        Download CV
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default Applications;
