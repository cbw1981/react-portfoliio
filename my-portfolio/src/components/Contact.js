import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission, validation, etc.
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        {emailError && <p>{emailError}</p>}
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;

