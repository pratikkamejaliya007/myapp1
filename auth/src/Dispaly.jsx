import React from 'react';
import { useNavigate } from 'react-router';
import { getAuth, signOut } from 'firebase/auth';
// import './Display.css';

function Dispaly() {
  const navigate = useNavigate();

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('email');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="display-container">
      <h1 className="display-header">Dispaly</h1>
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dispaly;
