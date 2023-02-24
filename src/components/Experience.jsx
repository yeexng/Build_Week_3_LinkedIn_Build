import { Row, Col } from "react-bootstrap";
import { BiPencil, BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import {
  postUserExperience,
  deleteSpecificExperienceAction,
} from "../redux/actions";
import { getUserProfileApi, getExperienceAction } from "../redux/actions";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { parseISO } from "date-fns";
import format from "date-fns/format";

const Experience = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [changed, setChanged] = useState(false);

  const [showPost, setShowPost] = useState(false);
  const handleClosePlus = () => setShowPost(false);
  const handleShowPlus = () => setShowPost(true);

  const [successful, setSuccessful] = useState(false);
  const handleCloseSuccessful = () => setSuccessful(false);
  const handleShowSuccessful = () => setSuccessful(true);

  const userExperiencesAPIRS = useSelector(
    (state) => state.getExperience.content
  );

  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);

  useEffect(() => {
    dispatch(getExperienceAction(userProfileAPIRS._id));
    setChanged(false);
  }, [changed]);

  //image upload to the experiences

  const [file, setFile] = useState();

  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  function handleUpload(expId) {
    const baseURL = `https://striveschool-api.herokuapp.com/api/profile/${userProfileAPIRS._id}/experiences/${expId}/picture`;
    const formData = new FormData();
    formData.append("experience", file);
    fetch(baseURL, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("You've uploaded your profile pic!", result);
        setChanged(true);
      })
      .catch((error) => {
        console.error("Problem uploading the image :(", error);
        setChanged(true);
      });
  }

  return (
    <Row
      className="d-flex flex-column edit-section bg-white mr-2 pr-0 mt-2"
      id="round-corners"
    >
      <Col className="d-flex flex-column mt-3 mb-3">
        <div className="d-flex align-items-center">
          <div>
            <p id="left-side-headers" className="mb-0">
              Experience
            </p>
          </div>
          <div className="ml-auto d-flex justify-content-end">
            <p className="mr-2 mb-0">
              <BiPlus onClick={handleShowPlus} id="analytics-icons"></BiPlus>
            </p>
          </div>
        </div>
      </Col>
      <Row className="d-flex justify-content-between mb-2 pr-0">
        {userExperiencesAPIRS &&
          userExperiencesAPIRS.map((data) => (
            <Row key={data._id} className="mb-3 pr-0">
              <Col lg={2} className="">
                <img id="experience-image" src={data.image} alt="" />
              </Col>
              <Col lg={10} className="pl-4 pr-0 d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <p id="mini-headers" className="mb-0">
                    Role: {data.role}
                  </p>
                  <p id="post-details" className="mb-0">
                    Company: {data.company}
                  </p>
                  <p id="post-details" className="mb-0">
                    Start Date: {format(parseISO(data.startDate), "MMM yyyy")}
                  </p>
                  <p id="post-details" className="mb-0">
                    End Date:
                    {format(parseISO(data.endDate), "MMM yyyy")}
                  </p>
                  <p id="post-details" className="mb-0">
                    Description: {data.description}
                  </p>
                  <p id="post-details" className="mb-0">
                    Location: {data.area}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="mb-0">
                    <MdOutlineAddAPhoto
                      id="analytics-icons"
                      onClick={handleClick}
                    ></MdOutlineAddAPhoto>
                  </p>
                  <Link to="/">
                    <p className="mb-0 text-dark">
                      <FiSend
                        id="analytics-icons"
                        onClick={() => {
                          handleUpload(data._id);
                          handleShowSuccessful();
                        }}
                      ></FiSend>
                    </p>
                  </Link>
                  <form
                    className="d-flex justify-content-around align-items-center"
                    p
                  >
                    <input
                      style={{ display: "none" }}
                      ref={inputRef}
                      type="file"
                      name="file"
                      onChange={handleFile}
                    />
                  </form>
                  <p
                    className="mb-0"
                    onClick={() =>
                      navigate(`/${data.user}/experiences/${data._id}`)
                    }
                  >
                    <BiPencil id="analytics-icons"></BiPencil>
                  </p>
                  <p
                    className="mb-0"
                    onClick={() => {
                      dispatch(
                        deleteSpecificExperienceAction(
                          userProfileAPIRS._id,
                          data._id
                        )
                      );
                      setChanged(true);
                    }}
                  >
                    <RxCross2 id="analytics-icons"></RxCross2>
                  </p>
                </div>
              </Col>
            </Row>
          ))}
      </Row>
      <Col className="d-flex"></Col>
      <Modal show={showPost} onHide={handleClosePlus}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Experience</Modal.Title>
        </Modal.Header>

        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
          <Form.Control
            aria-label=""
            aria-describedby="basic-addon1"
            id="experience-role"
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Company</InputGroup.Text>
          <Form.Control
            aria-label="Company"
            aria-describedby="basic-addon1"
            id="experience-company"
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Start Date</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="experience-startdate"
            type="date"
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">End Date</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="experience-enddate"
            type="date"
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="experience-description"
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="experience-area"
          />
        </InputGroup>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePlus}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(postUserExperience(userExperiencesAPIRS._id));
              setChanged(true);
            }}
          >
            Create Experience
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Successful Modal */}
      <Modal show={successful} onHide={handleCloseSuccessful}>
        <Alert variant="success" className="text-center">
          Successfully Updated !!
        </Alert>
      </Modal>
    </Row>
  );
};

export default Experience;
