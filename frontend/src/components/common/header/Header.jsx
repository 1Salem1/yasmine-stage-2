import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setIsLoggedIn(true);
      setUserType(decodedToken.type);
      setUserEmail(decodedToken.email);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
            {isLoggedIn && (
              <li>
                {userType === "company" ? (
                  <Link to="/applications">Applications</Link>
                  
                ) : (
                  <Link to="/stages">Applications</Link>
                )}
              </li>
            )}
            <li>
              {isLoggedIn ? (
                <li className="text-white" onClick={handleLogout}>
                  <a>Déconnexion</a>
                </li>
              ) : null}
            </li>
          </ul>
          <a className="start">
            {isLoggedIn ? (
              <Link className="button">POSTULER</Link>
            ) : (
              <Link to="/signin" className="button">
                SE CONNECTER
              </Link>
            )}
          </a>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <i className="fa fa-times"> </i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
