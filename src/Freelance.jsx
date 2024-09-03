import Card from 'react-bootstrap/Card';
import Button from './Button.jsx'

function Freelance() {

    return(
        <Card>
          <Card.Header>
          </Card.Header>
          <Card.Body>
            <Card.Title><h2>Freelance Inquiries</h2></Card.Title>
            <Card.Text>
              <p>Need a website for your buisness? Want to display/sell your artwork online? Maybe start a blog for your favourite movies? 
              Well youre in luck, beacuse I also do freelance work! Get in touch using any of the links below with a breakdown of your project and your deadline
              and Ill get back to you with a timeframe and quote!
              </p>
            <p>
                <strong>Email:</strong> <a href="mailto:your.email@example.com">your.email@example.com</a>
              </p>
              <p>
                <strong>Fiver:</strong> <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
              </p>
              <p>
                <strong>Freelance site 2:</strong> <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a>
              </p>
            </Card.Text>
            <Button/>
          </Card.Body>
        </Card>
    );
}

export default Freelance