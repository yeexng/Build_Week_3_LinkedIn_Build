import { Container, Row, Col } from "react-bootstrap";

import RightSide from "./RightSide";
import Footer from "./Footer";
import DropUpChat from "./DropUpChat";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { putUserExperience } from "../redux/actions";
import { getExperienceWithExpIdAction } from "../redux/actions";
import { parseISO } from "date-fns";
import format from "date-fns/format";

const ExperiencePage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const singleExpData = useSelector((state) => state.experienceWithId.content);

  useEffect(() => {
    dispatch(getExperienceWithExpIdAction(params.user, params.id));
  }, []);

  console.log("User ID", params.user, singleExpData.user);
  console.log("Exp ID", params.id, singleExpData._id);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={9}>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">Role</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.role}
                aria-label=""
                aria-describedby="basic-addon1"
                id="put-experience-role"
              />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">Company</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.company}
                aria-label="Company"
                aria-describedby="basic-addon1"
                id="put-experience-company"
              />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">Start Date</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.startDate}
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="put-experience-startdate"
                type="date"
              />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">End Date</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.endDate}
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="put-experience-enddate"
                type="date"
              />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.description}
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="put-experience-description"
              />
            </InputGroup>
            <InputGroup className="mb-3 px-4">
              <InputGroup.Text id="basic-addon1">Location</InputGroup.Text>
              <Form.Control
                placeholder={singleExpData.area}
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="put-experience-area"
              />
            </InputGroup>
            <Button
              variant="primary"
              onClick={() => {
                dispatch(
                  putUserExperience(singleExpData.user, singleExpData._id)
                );
              }}
            >
              Edit Experience
            </Button>
          </Col>

          <Col lg={3}>
            <RightSide></RightSide>
          </Col>
        </Row>
        <Row>
          <Footer></Footer>
        </Row>
        <Row>
          <Col lg={4}>
            <DropUpChat></DropUpChat>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExperiencePage;
