import React, { useState } from 'react';

const LegalInfoForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    motherName: '',
    mobileNumber: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
    gender: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.termsAccepted) {
      alert('You must accept the terms and conditions to proceed!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f4f4f9',
      }}
    >
      <div>
        <h1>College Admission Form</h1>
        <form onSubmit={handleSubmit}>
          {/* Legal Information */}
          <h2>Legal Info</h2>
          <div className="form-row">
            <label>
              Full Name <span className="required">*</span>:
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>
              Father's Name <span className="required">*</span>:
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>
              Mother's Name <span className="required">*</span>:
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender and Country Side by Side */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: '210px',
              marginBottom: '15px',
            }}
          >
            {/* Gender Section */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, marginRight: '20px' }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', color: '#555' }}>
                Gender <span style={{ color: 'red' }}>*</span>:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                    required
                  />
                  Female
                </label>
              </div>
            </div>

            {/* Country Section */}
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <label style={{ marginRight: '10px', fontWeight: 'bold', color: '#555' }}>
                Country <span style={{ color: 'red' }}>*</span>:
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                style={{
                  flex: 1,
                  padding: '8px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  fontSize: '14px',
                }}
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="India">India</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <h2>Contact Info</h2>
          <div className="form-row">
            <label>
              Mobile Number <span className="required">*</span>:
            </label>
            <input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>
              Email <span className="required">*</span>:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Username and Password */}
          <h2>Username and Password</h2>
          <div className="form-row">
            <label>
              Username <span className="required">*</span>:
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>
              Password <span className="required">*</span>:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <label>
              Confirm Password <span className="required">*</span>:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms and Conditions */}
          <div className="form-row">
            <label>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              I accept the <a href="#terms">Terms and Conditions</a>{' '}
              <span className="required">*</span>
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LegalInfoForm;
