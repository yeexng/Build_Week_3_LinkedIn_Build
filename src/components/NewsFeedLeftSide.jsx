import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/newsFeed.css";

const NewsFeedLeftSide = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);
  return (
    <>
      <Card id="news-feed-left-section" className="round-corners">
        <div className="top-card-div">
          <Card.Img
            variant="top"
            src="https://www.gordonkamitomo.com/wp-content/uploads/2017/09/LinkedIn-Banner-High-River.jpg"
            // src={userProfileAPIRS && userProfileAPIRS.image}
            alt="profile in navigation bar"
            // className="profile-photo-dropdown"
          />
          <Link to={"/"}>
            <img
              src={userProfileAPIRS && userProfileAPIRS.image}
              alt="profile"
              className="profile-left"
            ></img>
          </Link>
        </div>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <Card.Title className="text-center">
              <p>
                <strong>
                  {userProfileAPIRS && userProfileAPIRS.name}{" "}
                  {userProfileAPIRS && userProfileAPIRS.surname}
                </strong>{" "}
              </p>
              <p>
                <small className="text-muted">
                  {userProfileAPIRS && userProfileAPIRS.title}
                </small>
              </p>
            </Card.Title>
          </ListGroupItem>
          <div className="lower-part">
            <ListGroupItem>
              <span className="text-muted">Connections</span>
              <p>
                <strong>Connect with Alumni</strong>
              </p>
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <span className="text-muted">
                Access exclusive tools & insigths
              </span>
              <p>
                <strong className="text-decoration-underline">
                  💽Get hired Faster, Try Premium Free
                </strong>
              </p>
            </ListGroupItem>
            <ListGroupItem>
              <i className="bi bi-bookmark-fill"></i> <span>My items</span>
            </ListGroupItem>
          </div>
        </ListGroup>
      </Card>
      <Card id="news-feed-bottom-left-card" className="my-3 round-corners">
        <ListGroup className="list-group-flush">
          <div className="lower-part">
            <ListGroupItem className="text-primary">
              <p className="font-weight-bold">Groups</p>
              <p className="font-weight-bold">Events</p>
              <p className="font-weight-bold">Followed Hashtags</p>
            </ListGroupItem>
            <ListGroupItem>
              <p className="text-center text-muted">Discover More </p>
            </ListGroupItem>
          </div>
        </ListGroup>
      </Card>
    </>
  );
};

export default NewsFeedLeftSide;
