import { Row, Col } from "react-bootstrap";
import { BiPencil, BiPlus } from 'react-icons/bi'

const Experience = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3 mb-3">
                <div className="d-flex align-items-center">
                    <div>
                        <p id="left-side-headers" className="mb-0">Experience</p>
                    </div>
                    <div className="ml-auto d-flex" >
                        <p className="mr-3 mb-0"><BiPlus id="analytics-icons"></BiPlus></p><p className="mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                    </div>

                </div>

            </Col>
            <Col className="d-flex mb-2">
                <Col lg={1} className="px-0">
                    <img id="post-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhotpoptoday.com%2Fwp-content%2Fuploads%2F2019%2F08%2F5-1.jpg&f=1&nofb=1&ipt=0b33c318b30bb96d0ffdaae77e28758fec1c6d9ec0350a8f8bf8e9790204d63e&ipo=images" alt="" />
                </Col>
                <Col className="">
                    <p id="mini-headers" className="mb-0">Recording Engineer</p>
                    <p id="post-details" className="mb-0">Abbey Road Studios · Full-Time</p>
                    <p id="post-details">Jan 2015 - Nov 2022 · 5 yrs 11 mos</p>
                </Col>
            </Col>
            <Col className="d-flex" >

            </Col>
        </Row>
    )
}

export default Experience