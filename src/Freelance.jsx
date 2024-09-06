import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from './Button.jsx';
import ContactForm from './ContactForm'; // Import the form component

function Freelance() {
    return (
        <Card className="freelance-card">
            <Card.Body>
                <h2>Freelance Inquiries</h2> {/* h2 placed at the top of the body */}
                <Card.Text>
                    <p>
                        Brief call to action
                    </p>
                </Card.Text>
                
                <ContactForm /> {/* Contact form below the h2 */}
            </Card.Body>
        </Card>
    );
}

export default Freelance;
