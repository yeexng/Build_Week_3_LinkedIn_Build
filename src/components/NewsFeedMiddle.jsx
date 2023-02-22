import { useSelector } from "react-redux";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const NewsFeedMiddle = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={userProfileAPIRS && userProfileAPIRS.image}
        alt="profile in navigation bar"
        className="profile-photo-dropdown"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default NewsFeedMiddle;
