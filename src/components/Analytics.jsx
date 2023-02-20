import { Row, Col } from "react-bootstrap";
import { BsFillEyeFill, BsPeopleFill } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const Analytics = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <p id="left-side-headers" className="mb-0">Analytics</p>
                <div className="d-flex">
                    <p><BsFillEyeFill></BsFillEyeFill></p><p className="ml-2">Private to you</p>
                </div>
            </Col>
            <div className="d-flex" id="analytics-headers">
                <Col lg={1} className="pr-0 d-flex">
                    <p><BsPeopleFill id="analytics-icons"></BsPeopleFill></p>
                </Col>
                <Col lg={3} className="px-0">
                    <p className="mb-0">666 Profile views</p>
                    <p id="analytics-text">Discover who's viewed your profile.</p>
                </Col>
                <Col lg={1}>
                    <p><GoGraph id="analytics-icons"></GoGraph></p>
                </Col>
                <Col lg={3} className="px-0">
                    <p className="mb-0">666 post impressions</p>
                    <p id="analytics-text">Check out who's engaging with your posts.</p>
                </Col>
                <Col lg={1}>
                    <p><HiMagnifyingGlass id="analytics-icons"></HiMagnifyingGlass></p>
                </Col>
                <Col lg={3} className="px-0">
                    <p className="mb-0">666 search appearances</p>
                    <p id="analytics-text">See how often you appear in search results.</p>
                </Col>
            </div>
        </Row>
    )
}

export default Analytics