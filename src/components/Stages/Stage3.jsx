import React from 'react';

const Stage3 = ({ formData, onSubmit, onPrev }) => {
  return (
    <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold">Stage 3: Final Review</h2>

      <div className="space-y-4">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl text-yellow-500">Personal Information:</h3>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Name:</span> {formData.fullName || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Date of Birth:</span> {formData.dob || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Nationality:</span> {formData.nationality || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Email:</span> {formData.email || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Phone:</span> {formData.phone || 'Not Provided'}
          </p>
        </div>

        {/* Travel Preferences */}
        <div>
          <h3 className="text-xl text-yellow-500">Travel Preferences:</h3>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Departure Date:</span> {formData.departureDate || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Arrival Date:</span> {formData.arrivalDate || 'Not Provided'}
          </p>
          <p className="text-yellow-100">
            <span className="font-bold text-yellow-500">Spacecraft:</span> {formData.spacecraft || 'Not Provided'}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={onPrev}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={onSubmit}
          className="bg-yellow-400 text-black py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
        >
          Submit Application
        </button>
      </div>
    </div>
  );
};

export default Stage3;
