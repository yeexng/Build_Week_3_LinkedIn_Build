import { Row, Col } from "react-bootstrap";
import { BsQuestionCircleFill, BsPlus } from 'react-icons/bs'

const EditSection = () => {
    return (
        <Row className="d-flex flex-column bg-white px-2 edit-section" id="round-corners">
            <Col id="bottom-border" className="d-flex">
                <p className="my-3">Edit public profile & URL</p><p className="ml-auto my-3"><BsQuestionCircleFill></BsQuestionCircleFill></p>
            </Col>
            <Col className="d-flex">
                <p className="my-3">Add profile in another language</p><p className="ml-auto my-3"><BsQuestionCircleFill></BsQuestionCircleFill></p>
            </Col>
        </Row>
    )
}

export default EditSection