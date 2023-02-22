import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Image, Row, Col, Modal } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { RiGalleryFill } from "react-icons/ri";
import { ImBin } from "react-icons/im";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
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

  const [showPic, setShowPic] = useState(false);
  const handleClosePic = () => setShowPic(false);
  const handleShowPic = () => setShowPic(true);

  return (
    <Row
      className="d-flex flex-column edit-section bg-white mr-2 mb-2 pb-4"
      id="round-corners"
    >
      <Col className="px-0">
        <div className="avatar-wrapper">
          <div id="banner-container">
            <Image
              onClick={handleShowPic}
              className="img avatar-bg"
              src="https://www.gordonkamitomo.com/wp-content/uploads/2017/09/LinkedIn-Banner-High-River.jpg"
            />
            <Button variant="light" className="camera-btn">
              <AiFillCamera className="text-primary" />
            </Button>
            <Image
              onClick={handleShowPic}
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
              <InputGroup.Text id="inputGroup-sizing-sm">
                Surname
              </InputGroup.Text>
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
              <InputGroup.Text id="inputGroup-sizing-sm">
                Location
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-area"
                placeholder={userProfileAPIRS && userProfileAPIRS.area}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text id="inputGroup-sizing-sm">
                Username
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                id="change-username"
                placeholder={userProfileAPIRS && userProfileAPIRS.username}
              />
            </InputGroup>

            <InputGroup size="sm" className="mb-3 px-5">
              <InputGroup.Text>About</InputGroup.Text>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                id="change-bio"
                placeholder={userProfileAPIRS && userProfileAPIRS.bio}
              />
            </InputGroup>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePen}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  dispatch(putUserProfileApi());
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Pic Modal */}

          <Modal
            show={showPic}
            onHide={handleClosePic}
            animation={false}
            className="modal-profile"
          >
            <Modal.Header closeButton className="modal-wrapper">
              <Modal.Title>Profile photo</Modal.Title>
            </Modal.Header>
            <div className="d-flex justify-content-center modal-wrapper">
              <Image
                className="img-fluid model-profile-pic"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                roundedCircle
              />
            </div>
            <div className="modal-wrapper">
              <div
                className="btn btn-outline-light"
                style={{ borderRadius: 30 }}
              >
                <p className="text-light">Anyone</p>
              </div>
            </div>

            <Modal.Body className="modal-wrapper m-0">
              <Row className="justify-content-between">
                <Col md={8}>
                  <Row>
                    <Col className="btn modal-btn">
                      <FiEdit2 className="text-light" />
                      <br></br>
                      <p className="text-light">Edit</p>
                    </Col>
                    <Col className="btn modal-btn">
                      <AiFillCamera className="text-light" />
                      <br></br>
                      <p className="text-light">Add photo</p>
                    </Col>
                    <Col className="btn modal-btn">
                      <RiGalleryFill className="text-light" />
                      <br></br>
                      <p className="text-light">Frames</p>
                    </Col>
                  </Row>
                </Col>
                <Col md={3}>
                  <div>
                    <div className="btn modal-btn">
                      <ImBin className="text-light" />
                      <br></br>
                      <p className="text-light">Delete</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
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
