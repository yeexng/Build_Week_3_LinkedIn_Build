import NavBar from "./NavBar";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import RightSide from "./RightSide";
import Footer from "./Footer";
import DropUpChat from "./DropUpChat";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostWithIdAction, putPostAction } from "../redux/actions";

const NewsFeedEditPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);
  const feedData = useSelector((state) => state.getPostsWithId.content);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPostWithIdAction(params.id));
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
            <Row className="justify-content-end">
              <Button
                className="mr-2 col-2"
                variant="dark"
                onClick={() => {
                  navigate("/feed");
                }}
              >
                Back
              </Button>
              <Button
                className="mr-3 col-2"
                variant="primary"
                onClick={() => {
                  dispatch(putPostAction(feedData._id));
                  navigate("/feed");
                  // alert("Successfully Edited");
                }}
              >
                Edit Feed
              </Button>
            </Row>
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
