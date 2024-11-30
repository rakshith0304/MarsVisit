import React, { useState } from 'react';

const Stage2 = ({ onNext, onPrev, onFormData }) => {
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [spacecraft, setSpacecraft] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    // Validate form fields
    if (!departureDate) newErrors.departureDate = 'Departure date is required';
    if (!arrivalDate) newErrors.arrivalDate = 'Arrival date is required';
    if (!spacecraft) newErrors.spacecraft = 'Please select a spacecraft';

    setErrors(newErrors);

    // If no errors, pass data to parent and move to next stage
    if (Object.keys(newErrors).length === 0) {
      onFormData({
        departureDate,
        arrivalDate,
        spacecraft
      });
      onNext();
    }
  };

  return (
    <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold">Stage 2: Travel Preferences</h2>

      <div>
        <label className="block text-xl">Departure Date</label>
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
          className={`w-full p-2 mt-2 border-2 ${errors.departureDate ? 'border-red-500' : 'border-yellow-400'} rounded-md text-black`}
        />
        {errors.departureDate && <p className="text-red-500 text-sm">{errors.departureDate}</p>}
      </div>

      <div>
        <label className="block text-xl">Arrival Date</label>
        <input
          type="date"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          className={`w-full p-2 mt-2 border-2 ${errors.arrivalDate ? 'border-red-500' : 'border-yellow-400'} rounded-md text-black`}
        />
        {errors.arrivalDate && <p className="text-red-500 text-sm">{errors.arrivalDate}</p>}
      </div>

      <div>
        <label className="block text-xl">Preferred Spacecraft</label>
        <select
          value={spacecraft}
          onChange={(e) => setSpacecraft(e.target.value)}
          className={`w-full p-2 mt-2 border-2 ${errors.spacecraft ? 'border-red-500' : 'border-yellow-400'} rounded-md text-black`}
        >
          <option value="">Select a spacecraft</option>
          <option value="Mars-X">Mars-X</option>
          <option value="Red Planet">Red Planet</option>
          <option value="Explorer">Explorer</option>
        </select>
        {errors.spacecraft && <p className="text-red-500 text-sm">{errors.spacecraft}</p>}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onPrev}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Stage2;
