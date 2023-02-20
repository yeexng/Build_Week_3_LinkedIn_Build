import { useState } from "react";
import { Container, Button, Image, Row, Col, Modal } from "react-bootstrap";
import { AiFillCamera } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const ProfileAvatar = () => {
  const [show, setShow] = useState(false);
  const [showPic, setShowPic] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosePic = () => setShowPic(false);
  const handleShowPic = () => setShowPic(true);

  return (
    <Col md={8}>
      <Container>
        <div className="avatar-wrapper">
          <div>
            <Image
              className="img-fluid avatar-bg"
              src="https://images.unsplash.com/photo-1674511963160-2e6656e4d8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              rounded
            />
            <Button variant="light" className="camera-btn">
              <AiFillCamera className="text-primary" />
            </Button>
            <Image
              onClick={handleShowPic}
              className="img-fluid profile-pic"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              roundedCircle
            />
            <Button variant="light" className="edit-btn" onClick={handleShow}>
              <FiEdit2 />
            </Button>
          </div>

          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Profile Pic</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showPic} onHide={handleClosePic} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>Profile Editing</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClosePic}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClosePic}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          <Row className="details-box justify-content-between">
            <Col>
              <h4>
                Name <span className="gender-known">(He/Him)</span>
              </h4>
              <h6>title</h6>
              <p>
                location <a href="#">Contact Info</a>
              </p>
              <p>connections</p>
            </Col>
            <Col>
              <div>Company</div>
              <div>Institute</div>
            </Col>
            <Col md={12}>
              <Button variant="primary">Open to</Button>
              <Button variant="outline-primary">Add profile section</Button>
              <Button variant="outline-secondary">More</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </Col>
  );
};

export default ProfileAvatar;
