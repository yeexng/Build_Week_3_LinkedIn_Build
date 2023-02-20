import { Row, Col, Button } from "react-bootstrap";
import { BsPlus } from 'react-icons/bs'

const PeopleYouMayKnow = () => {
    return (
        <Row className="d-flex flex-column bg-white mt-2 edit-section" id="round-corners">
            <Col className="d-flex">
                <p className="my-3" id="right-side-headers">People you may know</p>
            </Col>
            <Col id="bottom-border" className="d-flex flex-column">
                <div className="d-flex">
                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeeksofdoom.com%2FGoD%2Fimg%2F2016%2F10%2Fduane_allman.jpg&f=1&nofb=1&ipt=2bc3376d3e660984a926eced6da0e7fc652dd6ec722ebc4cccec3384e4ea26ad&ipo=images" alt="" />
                    <div className="d-flex flex-column align-items-start mb-3">
                        <p className="mb-0 text-start viewed-people-names"> Duane Allman</p>
                        <p className="mb-0">Slide Player</p>
                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                    </div>
                </div>

                <div id="bottom-border" className="w-100 mb-2"></div>
            </Col>

        </Row>
    )
}

export default PeopleYouMayKnow