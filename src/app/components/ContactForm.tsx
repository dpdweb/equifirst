'use client';
// import { useState } from 'react';
import LeftPanel from './LeftPanel';
import MortgageForm from './MortgageForm';

const ContactForm = () => {
  // const [formData, setFormData] = useState({
  //   question1: '',
  //   question2: '',
  //   question3: '',
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic (e.g., send data to backend or API)
  //   console.log(formData);
  // };

  return (
    <div>
      <div className="ef-sub-page-top-style">
        <div className="flex w-full">
          <LeftPanel />
          <MortgageForm />
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
