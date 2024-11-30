import React, { useState } from 'react';

const Stage1 = ({ onNext, onPrev, onFormData }) => {
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [nationality, setNationality] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};

    // Validate form fields
    if (!fullName) newErrors.fullName = 'Full name is required';
    if (!dob) newErrors.dob = 'Date of birth is required';
    if (!nationality) newErrors.nationality = 'Nationality is required';
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Valid email is required';
    if (!phone || !/^\d{10}$/.test(phone)) newErrors.phone = 'Valid phone number is required';

    setErrors(newErrors);

    // If no errors, pass data to parent and move to next stage
    if (Object.keys(newErrors).length === 0) {
      onFormData({
        fullName,
        dob,
        nationality,
        email,
        phone
      });
      onNext();
    }
  };

  return (
    <div className="bg-black text-yellow-400 p-6 rounded-lg shadow-xl space-y-6">
      <h2 className="text-3xl font-bold">Stage 1: Personal Information</h2>

      <div>
        <label className="block text-xl">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={`w-full p-2 mt-2 text-black border-2 ${errors.fullName ? 'border-red-500' : 'border-yellow-400'} rounded-md`}
        />
        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-xl">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className={`w-full p-2 mt-2 text-black border-2 ${errors.dob ? 'border-red-500' : 'border-yellow-400'} rounded-md`}
        />
        {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
      </div>

      <div>
        <label className="block text-xl">Nationality</label>
        <input
          type="text"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          className={`w-full p-2 mt-2 text-black border-2 ${errors.nationality ? 'border-red-500' : 'border-yellow-400'} rounded-md`}
        />
        {errors.nationality && <p className="text-red-500 text-sm">{errors.nationality}</p>}
      </div>

      <div>
        <label className="block text-xl">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-2 mt-2 text-black border-2 ${errors.email ? 'border-red-500' : 'border-yellow-400'} rounded-md`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xl">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={`w-full p-2 mt-2 text-black border-2 ${errors.phone ? 'border-red-500' : 'border-yellow-400'} rounded-md`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="flex justify-end mt-6">
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

export default Stage1;
