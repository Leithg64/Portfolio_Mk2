import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your EmailJS credentials
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';
        const userID = 'YOUR_USER_ID';

        emailjs.send(serviceID, templateID, formData, userID)
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Your message has been sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error);
                    alert('Failed to send the message, please try again later.');
                }
            );

        // Reset form fields
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"   
                    required
                />
            </div>
            <div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"  
                    required
                />
            </div>
            <div>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message" 
                    required
                    rows="5"
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
