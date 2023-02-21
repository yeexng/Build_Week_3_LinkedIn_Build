import { Row, Col } from "react-bootstrap";
import { BsFillEyeFill } from 'react-icons/bs'
import '../styles/layout.css'

const SuggestedForYou = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <p id="left-side-headers" className="mb-0">Suggested for you</p>
                <div className="d-flex">
                    <p><BsFillEyeFill></BsFillEyeFill></p><p className="ml-2">Private to you</p>
                </div>
                <div>
                    <p className="mb-1" id="left-side-headers">Intermediate</p>
                </div>
                <div className="progress-bar-container d-flex justify-content-center align-items-center">
                    <div id="progress-bar">
                    </div>
                    <p className="mb-0 ml-1">7/7</p>
                </div>
                <div>
                    <p>Completed</p>
                </div>
            </Col>
        </Row>
    )
}
export default SuggestedForYou