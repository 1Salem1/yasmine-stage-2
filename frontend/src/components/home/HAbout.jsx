import React, { useEffect, useState } from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { getAllStages } from "../../services/stageService";
import { Link } from "react-router-dom";

const HAbout = () => {
  const [stages, setStages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStages = async () => {
      try {
        const allStages = await getAllStages();
        setStages(allStages);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchStages();
  }, []);

  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading subtitle="Nos Stages" title="Voir nos Stages disponibles" />

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="coursesCard">
              <div className="grid2">
                {stages.map((stage) => (
                  <div className="items" key={stage._id}>
                    <div className="content flex">
                      <div className="left">
                        <div className="img">
                          <img src={stage.cover} alt="" />
                        </div>
                      </div>
                      <div className="text">
                        <h3>{stage.titre}</h3>

                        <div className="details">
                          <div className="box">
                            {stage.competences.map((competence, index) => (
                              <p key={index}>{competence}&nbsp;</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="price">{stage.duree} mois</div>
                    <Link to="/postuler"><button className="outline-btn">
                    POSTULER
                    </button></Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HAbout;
