import { Row, Col } from "react-bootstrap";
import { BiPencil, BiPlus } from 'react-icons/bi'

const Volunteering = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3 mb-3">
                <div className="d-flex align-items-center">
                    <div>
                        <p id="left-side-headers" className="mb-0">Volunteering</p>
                    </div>
                    <div className="ml-auto d-flex" >
                        <p className="mr-3 mb-0" ><BiPlus id="analytics-icons"></BiPlus></p><p className="mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                    </div>

                </div>

            </Col>
            <Col className="d-flex mb-2">
                <Col lg={1} className="px-0">
                    <img id="post-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FxgHYCSqVzOE%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=194afa22c59a1ca0767ec582a7b16ae7152d11161516c3b481f86c6c41ce7db0&ipo=images" alt="" />
                </Col>
                <Col xs={11} md={11} lg={11}>
                    <p id="mini-headers" className="mb-0">Sea Turtle Conservation Ambassador</p>
                    <p id="post-details" className="mb-0">Volunteer</p>
                </Col>
            </Col>
        </Row>
    )
}

export default Volunteering