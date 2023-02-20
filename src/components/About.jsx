import { Row, Col, Button } from "react-bootstrap";
import { BiPencil } from 'react-icons/bi'

const About = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <div className="d-flex align-items-center justify-content-center">
                    <p id="left-side-headers" className="mb-0">About</p>
                    <p className="ml-auto mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                </div>

                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, explicabo hic nam ipsum quos a placeat, neque quae ullam enim dolorum nobis porro cumque, culpa assumenda et voluptatum inventore? Repellat.</p>
            </Col>
        </Row>
    )
}

export default About