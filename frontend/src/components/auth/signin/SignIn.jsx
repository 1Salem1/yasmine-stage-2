import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import '../signup/style.css';
import loginImage from '../../../assets/login.jpg';


export default function SignIn() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit } = useForm();

  const handleSignIn = async (data) => {
    try {
      const response = await  login({ email: data.email, password: data.password });
      if (response) {
        navigate('/');
      }
    } catch (error) {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };  

  return (
    <section className="log-in-page">
      <div className="main-page">
        <div className="welcome">
          <h2>Bienvenue</h2>
          <span className="guide">Veuillez vous connecter.</span>
        </div>
        <form className="form" onSubmit={handleSubmit(handleSignIn)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              {...register('password', { required: true })}
            />
          </div>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <div className="actions">
            <label htmlFor="check-box">
              <input type="checkbox" className="check-box" id="check-box" />
              Rappelez-vous 
            </label>

            <a href="#!">Mot de passe oublié?</a>
          </div>

          <button type="submit" className="btn btn-primary">
            Se connecter
          </button>
        </form>

        <p>
          <a>Vous n'avez pas de compte ? S'identifier</a>
        </p>
        <p>
        <a href="http://localhost:3000/company-signup"> Société / </a>
        <a href="http://localhost:3000/user-signup"> Utilisateur</a>
        </p>
      </div>
      <div className="sub-page">
      <img
          src={loginImage}
          alt="Login"
          className="img"
        />
      </div>
    </section>
  );
}