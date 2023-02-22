import { Col, Container, Row } from "react-bootstrap";
import DropUpChat from "./DropUpChat";
import Footer from "./Footer";
import NavBar from "./NavBar";
import NewsFeedLeftSide from "./NewsFeedLeftSide";
import NewsFeedMiddle from "./NewsFeedMiddle";
import RightSide from "./RightSide";

const NewsFeed = () => {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <Row className="mt-5 pt-5">
          <Col lg={2}>
            <NewsFeedLeftSide></NewsFeedLeftSide>
          </Col>
          <Col lg={7}>
            <NewsFeedMiddle></NewsFeedMiddle>
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

export default NewsFeed;
