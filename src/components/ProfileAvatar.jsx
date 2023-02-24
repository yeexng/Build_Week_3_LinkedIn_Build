import { useEffect, useState, useRef } from "react";
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
import { FiSend } from 'react-icons/fi'
import { BsUpload } from 'react-icons/bs'

const ProfileAvatar = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);

  const [show, setShow] = useState(false);
  console.log(userProfileAPIRS);

  const dispatch = useDispatch();
  // const [showPic, setShowPic] = useState(false);
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    dispatch(getUserProfileApi());
    setChanged(false)
  }, [changed]);

  const handleClosePen = () => setShow(false);
  const handleShowPen = () => setShow(true);

  const [showPic, setShowPic] = useState(false);
  const handleClosePic = () => setShowPic(false);
  const handleShowPic = () => setShowPic(true);

  const combinedFunction = () => {
    dispatch(putUserProfileApi())
    handleClosePen()
  }

  //Image Upload
  const [file, setFile] = useState()

  function handleFile(event) {
    setFile(event.target.files[0])
    console.log(event.target.files[0])
  }

  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  function handleUpload() {
    const baseURL = `https://striveschool-api.herokuapp.com/api/profile/${userProfileAPIRS._id}/picture`
    const formData = new FormData()
    formData.append('profile', file)
    fetch(baseURL,
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        }
      }
    ).then((response) => response.json()).then((result) => {
      console.log("You've uploaded your profile pic!", result)
      setChanged(true)
    }
    ).catch(error => {
      console.error("Problem uploading the image :(", error)
      setChanged(true)
    })
  }

  return (
    <Row
      className="d-flex flex-column edit-section bg-white mr-2 mb-2"
      id="round-corners"
    >

      <Col className="avatar-wrapper px-0">

        <Image
          onClick={handleShowPic}
          className="img avatar-bg-banner"
          src="https://www.gordonkamitomo.com/wp-content/uploads/2017/09/LinkedIn-Banner-High-River.jpg"
        />
        <Image
          onClick={handleShowPic}
          className="img profile-pic"
          id="profile-picture"
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
                combinedFunction()
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
            <Modal.Title className="text-white">Profile photo</Modal.Title>
          </Modal.Header>
          <div className="d-flex justify-content-center modal-wrapper pb-3">
            <Image
              className="img-fluid model-profile-pic"
              id="profile-picture"
              src={userProfileAPIRS && userProfileAPIRS.image}
              roundedCircle
            />
          </div>
          <div className="modal-wrapper">
          </div>

          <Modal.Body className="modal-wrapper m-0">
            <Row className="justify-content-between">
              <Row>
                <Col className="m-3">
                  {/* <AiFillCamera className="text-light" /><p className="text-light">Add photo</p> */}
                  <form className="d-flex justify-content-around align-items-center"
                  >
                    <input
                      style={{ display: 'none' }}
                      ref={inputRef}
                      type="file"
                      name="file"
                      onChange={handleFile}
                    />
                    <Button id="profile-pic-update-buttons" className="p-2" onClick={handleClick}><BsUpload></BsUpload><p className="text-light mb-0" >UPLOAD</p></Button>
                    <Button id="profile-pic-update-buttons" className="p-2" onClick={() => handleUpload()}><FiSend className="text-light" ></FiSend><p className="text-light mb-0" >SUBMIT</p></Button>
                  </form>
                </Col>
              </Row>
            </Row>
          </Modal.Body>
        </Modal>

        <Row className="details-box justify-content-between">
          <Row>
            <Col xs={4} md={6} lg={8} className="px-4">
              <h4 className="mt-4">
                {userProfileAPIRS && userProfileAPIRS.name}{" "}
                {userProfileAPIRS && userProfileAPIRS.surname}
              </h4>
              <h6>{userProfileAPIRS && userProfileAPIRS.title}</h6>
              <p className="mb-0">
                {userProfileAPIRS && userProfileAPIRS.area}{" "}
                <a href="#">
                  Contact Info: {userProfileAPIRS && userProfileAPIRS.email}
                </a>
              </p>
              <p>Connections</p>
            </Col>
            <Col xs={4} md={6} lg={4} className="mt-4 ">
              <div className="d-flex justify-content-center align-items-center">
                <img src="https://ecologiahoy.net/wp-content/uploads/2014/12/nasa-logo2.jpg" alt="" id="profile-company-logo" />
                <p className="mb-0 ml-2">NASA</p>
              </div>
            </Col>
          </Row>
        </Row>
        <Col xs={6} md={6} lg={6} className="d-flex justify-content-start d-none d-sm-flex mb-4">
          <Col className="px-1">
            <Button variant="primary" className="d-flex justify-content-center align-items-center px-3" id="profile-buttons">
              Open to
            </Button>
          </Col>
          <Col className="px-1">
            <Button variant="outline-primary" className="d-flex justify-content-center align-items-center text-truncate px-3" id="profile-buttons">
              Add profile section
            </Button>
          </Col>
          <Col className="px-1" >
            <Button variant="outline-secondary" className="d-flex justify-content-center align-items-center px-3" id="profile-buttons">
              More
            </Button>
          </Col>
        </Col>
      </Col>

    </Row >
  );
};

export default ProfileAvatar;
