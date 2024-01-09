import React, { useState } from 'react';
import axios from 'axios';

const InputForm = () => {
  const [formData, setFormData] = useState({
    cc_num: '',
    merchant: '',
    amt: '',
    sender_ip: '',
    merch_ip: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post('http://127.0.0.1:5000/predict', new URLSearchParams(formData))
      .then(response => {
        console.log(response.data);
        setPrediction(response.data);
      })
      .catch(error => {
        console.error('Error making API request:', error);
      });
  };

  const formStyle = {
    width: '50%', // Adjust the width as needed
    margin: 'auto', // Center the form
    marginTop: '50px',
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
    fontSize: '14px'
  };

  const buttonStyle = {
    width: '100%', // Make the button span the entire column
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px'
  };

  const resultStyle = {
    marginTop: '20px'
  };

  const getResultMessage = () => {
    const numericPrediction = parseInt(prediction, 10);
    return numericPrediction === 0 ? "Valid Transaction" : "Fraud Transaction";
  };
  

  return (
    <div style={formStyle}>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="cc_num" style={inputStyle} placeholder="Credit Card Number" required onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="merchant" style={inputStyle} placeholder="Merchant" required onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="amt" placeholder="Amount" style={inputStyle} required onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="sender_ip" placeholder="sender ip" style={inputStyle} required onChange={handleChange} />
        </div>
        <div>
          <input type="text" name="merch_ip" placeholder="merchant ip" style={inputStyle} required onChange={handleChange} />
        </div>
        <button type="submit" style={buttonStyle}>Predict</button>
      </form>

      {prediction !== null && (
        <div style={resultStyle}>
          <h2>Prediction Result</h2>
          <p>Prediction: {getResultMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
