import Card from 'react-bootstrap/Card';
import profilePic from './assets/profile.jpg'
import Button from './Button.jsx'

function About() {

    return(
        <Card>
          <Card.Header>
          </Card.Header>
          <Card.Body>
            <Card.Img className="card-image" src={profilePic} alt="profile picture"></Card.Img>
            <Card.Title><h2>About</h2></Card.Title>
            <Card.Text>
              <p>
                Hi, Im Leith! Im a Full-Stack Web Developer, born in Australia and now based in London, Im building websites with 
                a focus on smart, interesting and responsive UX and UI design that are accessible to all.
              </p>
            </Card.Text>
            <Button/>
          </Card.Body>
        </Card>
    );
}

export default About