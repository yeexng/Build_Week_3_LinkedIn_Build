import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Row, Col, Modal } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { putUserProfileApi } from "../redux/actions";
import "../styles/profileDiv.css";
import { getUserProfileApi } from "../redux/actions";

const ProfileAvatar = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);
  const [show, setShow] = useState(false);
  console.log(userProfileAPIRS)

  const dispatch = useDispatch();
  // const [showPic, setShowPic] = useState(false);

  useEffect(() => {
    dispatch(getUserProfileApi())
  }, []);

  const handleClosePen = () => setShow(false);
  const handleShowPen = () => setShow(true);

  // const handleClosePic = () => setShowPic(false);
  // const handleShowPic = () => setShowPic(true);

  return (
    <Row
      className="d-flex flex-column edit-section bg-white mr-2 mb-2"
      id="round-corners"
    >
      <Col className="px-0">
        <div className="avatar-wrapper">
          <div id="banner-container">
            <Image
              className="img avatar-bg"
              src="https://www.gordonkamitomo.com/wp-content/uploads/2017/09/LinkedIn-Banner-High-River.jpg"
            />
            <Button variant="light" className="camera-btn">
              <AiFillCamera className="text-primary" />
            </Button>
            <Image
              // onClick={handleShowPic}
              className="img profile-pic"
              src={userProfileAPIRS && userProfileAPIRS.image}
              roundedCircle
            />
            <Button
              variant="light"
              className="edit-btn"
              onClick={handleShowPen}
            >
              <FiEdit2 />
            </Button>
          </div>

          <Modal show={show} onHide={handleClosePen}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Info</Modal.Title>
            </Modal.Header>

            <InputGroup size="sm" className="mb-3 px-5 pt-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-name"
                placeholder={userProfileAPIRS && userProfileAPIRS.name}
              />

            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">Surname</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-surname"
                placeholder={userProfileAPIRS && userProfileAPIRS.surname}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-email"
                placeholder={userProfileAPIRS && userProfileAPIRS.email}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-title"
                placeholder={userProfileAPIRS && userProfileAPIRS.title}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">Location</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-area"
                placeholder={userProfileAPIRS && userProfileAPIRS.area}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">Username</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-username"
                placeholder={userProfileAPIRS && userProfileAPIRS.username}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text >About</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" id="change-bio" placeholder={userProfileAPIRS && userProfileAPIRS.bio} />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePen}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {
                dispatch(putUserProfileApi())
              }}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Row className="details-box justify-content-between">
            <Col className="px-4">
              <h4>
                {userProfileAPIRS && userProfileAPIRS.name}{" "}
                {userProfileAPIRS && userProfileAPIRS.surname}
              </h4>
              <h6>{userProfileAPIRS && userProfileAPIRS.title}</h6>
              <p>
                {userProfileAPIRS && userProfileAPIRS.area}{" "}
                <a href="#">
                  Contact Info: {userProfileAPIRS && userProfileAPIRS.email}
                </a>
              </p>
              <p>connections</p>
            </Col>
            <Col>
              <div>Company</div>
              <div>Institute</div>
            </Col>
            <Col md={12} className="px-4 d-flex">
              <Button variant="primary" id="main-buttons">
                Open to
              </Button>
              <Button variant="outline-primary mx-3" id="main-buttons">
                Add profile section
              </Button>
              <Button variant="outline-secondary" id="main-buttons">
                More
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ProfileAvatar;
