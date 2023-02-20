import { Row, Col, Button } from "react-bootstrap";
import { BiPencil, BiPlus } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3 mb-3">
                <div className="d-flex align-items-center">
                    <div>
                        <p id="left-side-headers" className="mb-0">Skills</p>
                    </div>
                    <div className="ml-auto d-flex" >
                        <p className="mb-0 mr-2"><Button variant="primary" id="main-buttons">Demonstrate skills</Button></p><p className="mr-3 mb-0"><BiPlus id="analytics-icons"></BiPlus></p><p className="mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                    </div>
                </div>
            </Col>
            <Col className="d-flex mb-2">
                <Col className="px-0">
                    <p id="left-side-mini-headers">Recording Technologies</p>
                    <div className="d-flex align-items-center" id="bottom-border">
                        <BsFillPeopleFill className="mb-2"></BsFillPeopleFill><p className="mb-2 ml-3">666 endorsements</p>
                    </div>
                </Col>
            </Col>
        </Row>
    )
}

export default Skills