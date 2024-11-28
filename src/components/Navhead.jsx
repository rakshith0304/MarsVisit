import React, { useState, useEffect } from 'react';

const Navhead = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-black text-yellow-400 py-4 px-6">
      <div>
        <button
          onClick={() => window.location.reload()}
          className="text-lg font-bold hover:underline"
        >
          Mars Visit
        </button>
      </div>

      <div className="text-sm">
        <p>{currentTime.toLocaleDateString()}</p>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    </nav>
  );
};

export default Navhead;
