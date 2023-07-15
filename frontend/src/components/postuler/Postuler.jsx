import React, { useState } from "react";
import Back from "../common/back/Back";


const Postuler = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cvFile, setCVFile] = useState(null);
  const [faculty, setFaculty] = useState("");
  const [internshipDuration, setInternshipDuration] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCVFileChange = (event) => {
    const file = event.target.files[0];
    setCVFile(file);
  };

  const handleFacultyChange = (event) => {
    setFaculty(event.target.value);
  };

  const handleInternshipDurationChange = (event) => {
    setInternshipDuration(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("cvFile", cvFile);
    formData.append("faculty", faculty);
    formData.append("internshipDuration", internshipDuration);
    formData.append("message", message);

    fetch("http://localhost:8080/internship-application", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Internship application submitted successfully");
          // Reset the form values if needed
        } else {
          console.error("Error submitting internship application");
        }
      })
      .catch((error) => {
        console.error("Error submitting internship application", error);
      });
  };

  return (
    <>
  <Back title="Postuler" />
  <section className="contacts padding">
    <div className="container">
      <div className="row justify-content-center">
        <div className="">
          <h1 className="text-center">Postuler pour un stage</h1>
          <p className="text-center">Nous sommes ouverts aux candidatures pour nos stages disponibles</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Numéro de téléphone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cvFile" className="form-label">
                CV (Fichier)
              </label>
              <input
                type="file"
                className="form-control"
                id="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={handleCVFileChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Faculté"
                value={faculty}
                onChange={handleFacultyChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="internshipDuration" className="form-label">
                Durée du stage
              </label>
              <select
                className="form-select"
                id="internshipDuration"
                value={internshipDuration}
                onChange={handleInternshipDurationChange}
              >
                <option value="">Sélectionnez une durée</option>
                <option value="1 mois">1 mois</option>
                <option value="2 mois">2 mois</option>
                <option value="3 mois">3 mois</option>
              </select>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Expliquez votre intérêt pour le stage et mentionnez vos qualifications pertinentes..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button className="btn btn-primary" type="submit">
                POSTULER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</>

  
  );
};

export default Postuler;
