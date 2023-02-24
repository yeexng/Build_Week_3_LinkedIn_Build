import NavBar from "./NavBar";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import RightSide from "./RightSide";
import Footer from "./Footer";
import DropUpChat from "./DropUpChat";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostWithIdAction,
  handleUploadAction,
  putPostAction,
} from "../redux/actions";
import { BsUpload } from "react-icons/bs";

const NewsFeedEditPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const feedData = useSelector((state) => state.getPostsWithId.content);
  const navigate = useNavigate();
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

  useEffect(() => {
    dispatch(getPostWithIdAction(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={9}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Edit NewsFeed</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={feedData.text}
                rows={15}
                id="feeds-data-edited"
              />
            </Form.Group>
            <Row className="justify-content-end mb-3">
              <Button
                className="col-2"
                variant="dark"
                onClick={() => {
                  navigate("/feed");
                }}
              >
                Back
              </Button>
              <input
                style={{ display: "none" }}
                ref={inputRef}
                type="file"
                name="file"
                onChange={handleFile}
              />
              <Button
                id="profile-pic-update-buttons  "
                className="p-2 text-light button-to-style ml-2"
                onClick={handleClick}
              >
                <BsUpload id="button-to-style"></BsUpload>
                <p className="mb-0">UPLOAD</p>
              </Button>
              <Button
                className="col-2 mr-3"
                variant="primary"
                onClick={() => {
                  dispatch(putPostAction(feedData._id));
                  navigate("/feed");
                  handleUploadAction(feedData._id, file);

                  // alert("Successfully Edited");
                }}
              >
                Edit Feed
              </Button>
            </Row>
            {file && (
              <Alert variant="success" className="mb-3">
                You are uploading:{" "}
                <strong>
                  <em>{file.name}</em>
                </strong>
              </Alert>
            )}
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

export default NewsFeedEditPage;
