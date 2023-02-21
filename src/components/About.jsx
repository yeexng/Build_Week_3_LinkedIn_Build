import { Row, Col, Button } from "react-bootstrap";
import { BiPencil } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import '../styles/layout.css'

const About = () => {
    const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock)
    console.log(userProfileAPIRS)

    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <div className="d-flex align-items-center justify-content-center">
                    <p id="left-side-headers" className="mb-0">About</p>
                    <p className="ml-auto mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                </div>

                <p className="mt-3">{userProfileAPIRS.bio}</p>
            </Col>
        </Row>
    )
}

export default About