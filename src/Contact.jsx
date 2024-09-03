import Card from 'react-bootstrap/Card';
import Button from './Button.jsx'

function Contact() {

    return(
        <Card>
          <Card.Header>
          </Card.Header>
          <Card.Body>
            <Card.Title><h2>Contact</h2></Card.Title>
            <Card.Text>
              <p>Im currently on the hunt for my next position in the Web Dev Industry! If you like the look of any of my work and think your team could use my skills and knowledge, feel free to reach out using any of the links below!</p>
            <p>
                <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a>
              </p>
            </Card.Text>
            <Button/>
          </Card.Body>
        </Card>
    );
}

export default Contact