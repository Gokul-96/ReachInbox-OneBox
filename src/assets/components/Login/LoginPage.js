import React from 'react';
import { GoogleLogin } from 'react-google-login';
import Header from './Header';
import Footer from './Footer';
import '../../styles/login.css';

const LoginPage = () => {
  const handleLoginSuccess = (response) => {
    const token = response.tokenId;
  
  };

  const handleLoginFailure = (response) => {
    console.error('Login failed:', response);
  };

  return (
    <div className="login-page">
      <Header />
      <div className="login-body">
        <h1>Create a new account</h1>
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Sign Up with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;