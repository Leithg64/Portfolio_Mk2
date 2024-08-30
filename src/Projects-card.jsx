import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import profilePic from './assets/sam.png'
import Button from './Button.jsx'

function ProjectTabs() {
    return (
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Project1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Project2">Project2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Project3">Project3</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Img className="card-image" src={profilePic} alt="profile picture"></Card.Img>
            <Card.Title><h2>Project Title</h2></Card.Title>
            <Card.Text>
              Shows a description based on the current project displayed on the card based on what the user clicks in the card header.
            </Card.Text>
            <Button/>
          </Card.Body>
        </Card>
      );
    }

export default ProjectTabs;