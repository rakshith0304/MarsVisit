import React, { useState, useEffect } from 'react';
import mars from '../assets/mars.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [countdownDays, setCountdownDays] = useState(0);
  const [countdownTime, setCountdownTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize random countdown values
    const randomDays = Math.floor(Math.random() * 41) + 180; // 180 to 220
    const randomHours = Math.floor(Math.random() * 24); // 0 to 23
    const randomMinutes = Math.floor(Math.random() * 60); // 0 to 59
    const randomSeconds = Math.floor(Math.random() * 60); // 0 to 59
    setCountdownDays(randomDays);
    setCountdownTime({ hours: randomHours, minutes: randomMinutes, seconds: randomSeconds });

    // Countdown logic
    const timer = setInterval(() => {
      setCountdownTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (countdownDays > 0) {
          setCountdownDays((prevDays) => prevDays - 1);
          seconds = 59;
          minutes = 59;
          hours = 23;
        } else {
          clearInterval(timer); // Stop the timer when countdown ends
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, [countdownDays]);

  // Function to navigate to the stage
  const goToStage = () => {
    navigate('/stage');
  };

  return (
    <div className="bg-black text-yellow-400 min-h-screen flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold">
          Explore Mars.
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mt-4">
          Your Journey Beyond Earth Awaits.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-yellow-300">
          Be part of the ultimate adventure to the Red Planet. Sign up now to make history!
        </p>
      </div>

      {/* Countdown Section */}
      <div className="mt-10 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-yellow-300">
          Countdown to Mars:
        </h3>
        <p className="text-2xl md:text-3xl mt-2">
          {countdownDays} days, {countdownTime.hours}h : {countdownTime.minutes}m : {countdownTime.seconds}s
        </p>
      </div>

      {/* Mars-Themed Image */}
      <div className="mt-10">
        <img
          src={mars}
          alt="Mars Adventure"
        />
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12">
        <button
          className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition ease-in-out duration-300"
          onClick={goToStage}  // Call the function on button click
        >
          Apply Now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-yellow-300 text-center text-sm">
        <p>&copy; 2024 Mars Exploration Program. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
