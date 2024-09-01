import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Header from './Header';
import Footer from './Footer';
import './login.css';

const LoginPage = () => {
  const handleLoginSuccess = (response) => {
    console.log(response);
    const token = response.credential;
    localStorage.setItem('authToken', token);
    window.location.href = '/onebox';
  };

  const handleLoginFailure = () => {
    console.error('Login failed');
  };

  return (
    <GoogleOAuthProvider clientId="">
      <div className="login-page">
        <Header />
        <div className="login-body">
          <h1>Create a new account</h1>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
          />
          <button className="create-account-button">Create an Account</button>
          <div className="links">
            <a href="/signin" className="link">Sign In</a>
            <a href="/signup" className="link">Sign Up</a>
          </div>
        </div>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;