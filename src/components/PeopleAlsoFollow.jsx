import { Row, Col, Button } from "react-bootstrap";
import { BsPlus } from 'react-icons/bs'

const PeopleAlsoFollow = () => {
    return (
        <Row className="d-flex flex-column bg-white mt-2 edit-section" id="round-corners">
            <Col className="d-flex">
                <p className="my-3" id="right-side-headers">People also follow</p>
            </Col>
            <Col id="bottom-border" className="d-flex flex-column">
                <div className="d-flex">
                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91ifNV0vusL._SL1000_.png&f=1&nofb=1&ipt=64379c18b35f26f238ba110fb4f719eaa0d661fdec7cc760721ef00feffaa3a6&ipo=images" alt="" />
                    <div className="d-flex flex-column align-items-start mb-3">
                        <p className="mb-0 text-start viewed-people-names"> Steve Lukather</p>
                        <p className="mb-0">Session Guitarist</p>
                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                    </div>
                </div>
                <div id="bottom-border" className="w-100 mb-2"></div>
            </Col>
        </Row>
    )
}

export default PeopleAlsoFollow