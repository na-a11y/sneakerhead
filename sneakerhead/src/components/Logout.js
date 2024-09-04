import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Logout.css';

const Logout = ({ setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null);
    navigate('/');
  }, [setUser, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
