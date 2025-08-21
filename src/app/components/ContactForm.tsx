'use client';
import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend or API)
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <h2>Let's connect - this won’t take long!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>What are you looking for?</label>
          <select
            name="question1"
            value={formData.question1}
            onChange={handleChange}
          >
            <option value="buying">I'm buying a property</option>
            <option value="refinancing">I'm refinancing my home</option>
          </select>
        </div>

        <div className="form-group">
          <label>What is the property status?</label>
          <select
            name="question2"
            value={formData.question2}
            onChange={handleChange}
          >
            <option value="completed">Completed</option>
            <option value="under-construction">Under construction</option>
            <option value="land">Land</option>
          </select>
        </div>

        <div className="form-group">
          <label>What is the value of the property?</label>
          <input
            type="number"
            name="question3"
            value={formData.question3}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default ContactForm;
