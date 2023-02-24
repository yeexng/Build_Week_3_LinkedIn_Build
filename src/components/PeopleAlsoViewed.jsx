import { Row, Col, Button } from "react-bootstrap";
import { BsPlus } from 'react-icons/bs'

const PeopleAlsoViewed = () => {
    return (
        <Row className="d-flex flex-column bg-white mt-2 edit-section" id="round-corners">
            <Col className="d-flex">
                <p className="my-3" id="right-side-headers">People Also Viewed</p>
            </Col>
            <Col id="bottom-border" className="d-flex flex-column">
                <div className="d-flex">
                    <img className="right-side-profile-images mr-2" src="https://i1.wp.com/genreisdead.com/wp-content/uploads/2020/10/000400481W-e1602028515563.jpg?fit=1400%2C1053&ssl=1" alt="" />
                    <div className="d-flex flex-column align-items-start mb-3">
                        <p className="mb-0 text-start viewed-people-names"> Eddie Van Halen</p>
                        <p className="mb-0">Legendary Guitarist</p>
                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                    </div>
                </div>

                <div id="bottom-border" className="w-100 mb-2"></div>
            </Col>
        </Row>
    )
}

export default PeopleAlsoViewed