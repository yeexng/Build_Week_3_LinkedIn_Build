import { Container, Row, Col } from "react-bootstrap";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

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
        </Container>
    )
}

export default MainLayout