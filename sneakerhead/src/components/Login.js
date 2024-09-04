import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = () => {
      const user = localStorage.getItem('user');
      setIsLoggedIn(!!user);
    };

    checkUserStatus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', email);
    setUser(email);
    setIsLoggedIn(true);
    toast.success(`${email}, you're logged in successfully!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'toast-success',
    });
    setTimeout(() => {
      navigate('/home');
    }, 5000);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="login-page">
      <ToastContainer />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <div className="password-container">
          <input 
            type={showPassword ? 'text' : 'password'} 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
      {!isLoggedIn ? (
        <p className="signup-link">
          New user? <a href="/signup">Create an account</a>
        </p>
      ) : (
        <p className="signup-link">
          Want to log out? <a onClick={handleLogout} href="#">Logout</a>
        </p>
      )}
    </div>
  );
};

export default Login;
