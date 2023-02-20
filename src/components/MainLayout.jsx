import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Footer from "./Footer";
import DropUpChat from "./DropUpChat";


const MainLayout = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col lg={9}>
                    <LeftSide></LeftSide>
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
    )
}

export default MainLayout