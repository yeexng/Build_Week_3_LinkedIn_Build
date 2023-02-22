import { Row, Col } from "react-bootstrap";
import { BiPencil, BiPlus } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {
  postUserExperience,
  deleteSpecificExperienceAction,
} from "../redux/actions";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPost, setShowPost] = useState(false);
  const handleClosePlus = () => setShowPost(false);
  const handleShowPlus = () => setShowPost(true);

  const [showPut, setShowPut] = useState(false);
  const handleClosePen = () => setShowPut(false);
  const handleShowPen = () => setShowPut(true);

  const userExperiencesAPIRS = useSelector(
    (state) => state.getExperience.content
  );
  console.log(userExperiencesAPIRS);

  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);

  const postUserExperienceRS = useSelector(
    (state) => state.postUserExperience.content
  );

  return (
    <Row
      className="d-flex flex-column edit-section bg-white mr-2 mt-2"
      id="round-corners"
    >
      <Col className="d-flex flex-column mt-3 mb-3">
        <div className="d-flex align-items-center">
          <div>
            <p id="left-side-headers" className="mb-0">
              Experience
            </p>
          </div>
          <div className="ml-auto d-flex">
            <p className="mr-3 mb-0">
              <BiPlus onClick={handleShowPlus} id="analytics-icons"></BiPlus>
            </p>
          </div>
        </div>
      </Col>
      <Row className="d-flex mb-2">
        {userExperiencesAPIRS &&
          userExperiencesAPIRS.map((data) => (
            <>
              <Row className="mb-3">
                <Col key={data._id} lg={1} className="">
                  <img
                    id="post-image"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhotpoptoday.com%2Fwp-content%2Fuploads%2F2019%2F08%2F5-1.jpg&f=1&nofb=1&ipt=0b33c318b30bb96d0ffdaae77e28758fec1c6d9ec0350a8f8bf8e9790204d63e&ipo=images"
                    alt=""
                  />
                </Col>
                <Col lg={11} className="pl-4 d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <p id="mini-headers" className="mb-0">
                      Role: {data.role}
                    </p>
                    <p id="post-details" className="mb-0">
                      Company: {data.company}
                    </p>
                    <p id="post-details" className="mb-0">
                      Start Date: {data.startDate}
                    </p>
                    <p id="post-details" className="mb-0">
                      End Date: {data.endDate}
                    </p>
                    <p id="post-details" className="mb-0">
                      Description: {data.description}
                    </p>
                    <p id="post-details" className="mb-0">
                      Location: {data.area}
                    </p>
                    <p>{data._id}</p>
                  </div>
                  <div className="d-flex">
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
                      }}
                    >
                      <RxCross2 id="analytics-icons"></RxCross2>
                    </p>
                  </div>
                </Col>
                <Modal show={showPut} onHide={handleClosePen}>
                  <EditModal key={data._id} experienceData={data}></EditModal>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePen}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </>
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
          />
        </InputGroup>
        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">End Date</InputGroup.Text>
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="experience-enddate"
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
            }}
          >
            Create Experience
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
};

export default Experience;
