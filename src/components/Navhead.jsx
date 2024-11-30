import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navhead = () => {
  
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <nav className="flex justify-between items-center bg-black text-yellow-400 py-4 px-6">
      <div>
        <button
          onClick={goToHome}
          className="text-lg font-bold hover:underline"
        >
          Mars Visit
        </button>
      </div>
    </nav>
  );
};

export default Navhead;
