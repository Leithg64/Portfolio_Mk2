import Card from 'react-bootstrap/Card';
import profilePic from './assets/sam.png'
import Button from './Button.jsx'

function Cards() {

    return(
        <Card>
          <Card.Header>
          </Card.Header>
          <Card.Body>
            <Card.Img className="card-image" src={profilePic} alt="profile picture"></Card.Img>
            <Card.Title><h2>Title</h2></Card.Title>
            <Card.Text>
              Text based on the content of this card, either bio, contact or freelance inquiries.
            </Card.Text>
            <Button/>
          </Card.Body>
        </Card>
    );
}

export default Cards