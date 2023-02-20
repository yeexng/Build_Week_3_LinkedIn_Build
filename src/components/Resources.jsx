import { Row, Col } from "react-bootstrap";
import { BsFillEyeFill } from 'react-icons/bs'
import { GiRadarDish } from 'react-icons/gi'
import { BsPeopleFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge';

const Resources = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <p id="left-side-headers" className="mb-0">Resources</p>
                <div className="d-flex">
                    <p><BsFillEyeFill></BsFillEyeFill></p><p className="ml-2">Private to you</p>
                </div>
            </Col>
            <Col className="d-flex flex-column">
                <Col className="px-0 d-flex">
                    <Col lg={1}>
                        <GiRadarDish id="analytics-icons"></GiRadarDish>
                    </Col>
                    <Col>
                        <div className="d-flex">
                            <p className="mb-0" id="analytics-headers">Creator Mode</p> <Badge className="ml-2" bg="secondary" id="analytics-badge">Off</Badge>
                        </div>
                        <p>Get discovered, showcase content on your profile, and get access to creator tools</p>
                    </Col>
                </Col>
                <div id="bottom-border" className="w-100 mb-2"></div>
            </Col>
            <Col className="d-flex mb-4" id="bottom-border">
                <Col lg={1}>
                    <BsPeopleFill id="analytics-icons"></BsPeopleFill>
                </Col>
                <Col>
                    <p id="analytics-headers" className="mb-0">My Network</p>
                    <p>See and manage your connections and interests.</p>
                </Col>
            </Col>
        </Row>
    )
}

export default Resources