import Card from 'react-bootstrap/Card';

function Contact() {

    return(
        <Card>
          <Card.Header>
          </Card.Header>
          <Card.Body>
            <Card.Title><h2>Get In Touch!</h2></Card.Title>
            <Card.Text className="contact-info">
              <p>Im currently on the hunt for my next position in the Web Dev Industry! If you like the look of any of my work and think your team could use my skills and knowledge, feel free to reach out using any of the links below!</p>
            <p>
                <strong>Email:</strong> <a href="mailto:leithgreenwebdev@gmail.com">leithgreenwebdev@gmail.com</a>
              </p>
              <p>
                <strong>LinkedIn:</strong> <a href="www.linkedin.com/in/leith-green" target="_blank" rel="noopener noreferrer">linkedin.com/in/leith-green</a>
              </p>
              <p>
                <strong>GitHub:</strong> <a href="https://github.com/Leithg64" target="_blank" rel="noopener noreferrer">github.com/Leithg64</a>
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
    );
}

export default Contact