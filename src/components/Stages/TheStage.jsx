import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';

const TheStage = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    arrivalDate: '',
    spacecraft: ''
  });

  const navigate = useNavigate(); // Initializing navigate hook

  const goToHome = () => {
    navigate('/'); // Navigate to home
  };

  const handleNext = () => {
    setCurrentStage(currentStage + 1);
  };

  const handlePrev = () => {
    setCurrentStage(currentStage - 1);
  };

  const handleFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    alert('Application Submitted!');
    goToHome();  // Call goToHome to navigate after alert
  };

  return (
    <div className="bg-black text-yellow-400 min-h-screen flex flex-col items-center justify-center p-6">
      {currentStage === 1 && <Stage1 onNext={handleNext} onPrev={handlePrev} onFormData={handleFormData} />}
      {currentStage === 2 && <Stage2 onNext={handleNext} onPrev={handlePrev} onFormData={handleFormData} />}
      {currentStage === 3 && <Stage3 formData={formData} onSubmit={handleSubmit} onPrev={handlePrev} />}
    </div>
  );
};

export default TheStage;
