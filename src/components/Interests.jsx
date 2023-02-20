import { Row, Col, Button } from "react-bootstrap";
import { BsPlus } from 'react-icons/bs'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Interests = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3">
                <p id="left-side-headers" className="mb-0">Interests</p>
            </Col>
            <Col>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="top-voices" title="Top Voices">
                        <Row className="d-flex justify-content-center">
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fcd%2F51%2Fa2%2Fcd51a209ba2839e5045504114ca8235e.jpg&f=1&nofb=1&ipt=17989e6831b7f625fa108e1ecc287bb1a1a0cc000402634cdc6cec4c96d7e979&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">Paul Gilbert</p>
                                        <p className="mb-0">Solo Guitarist</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhoradelrecreo.com%2Fwp-content%2Fuploads%2F2019%2F04%2FStevieRayVaughanApril291988.jpg&f=1&nofb=1&ipt=16ee1ebf467eaccf30db3843bcce326d2149722ef3fbebfc33e9eed3a580bd3b&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">Texas Guitarist</p>
                                        <p className="mb-0">Session Guitarist</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="companies" title="Companies">
                        <Row className="d-flex justify-content-center">
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F02%2FFender-Logo-1024x576.png&f=1&nofb=1&ipt=34a4bcec430861069122e169df2b067e80e17d59694d8aab0a7f0b07c81582e2&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">Fender Guitars</p>
                                        <p className="mb-0">Musical Instruments</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7AX9Ra0K-kQWr9RuLqjMIgHaHa%26pid%3DApi&f=1&ipt=018e2cc788bbc8afb7427c8f092898f2ee57df691ebdefcc4ed980a973b5fd55&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">Marshall Amps</p>
                                        <p className="mb-0">Legendary British Amps</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="schools" title="Schools">
                        <Row className="d-flex justify-content-center">
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3dprint.com%2Fwp-content%2Fuploads%2F2015%2F09%2Fmit_logo.gif&f=1&nofb=1&ipt=7a729efffb146226ecb4bc1e6c033f38864efc66a348f7a5e62d22a4c2b54ec4&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">MIT</p>
                                        <p className="mb-0">Institue of Technology</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <img className="right-side-profile-images mr-2" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.vqGFFhBuYHE4d1Fkyy2nPgHaFL%26pid%3DApi&f=1&ipt=cca483549e76dc832921c2ed372803c03677fcb9c3eb059b1e410e8745050104&ipo=images" alt="" />
                                    <div className="d-flex flex-column align-items-start mb-3">
                                        <p className="mb-0 text-start viewed-people-names">TU München</p>
                                        <p className="mb-0">Technical University</p>
                                        <Button id="follow-button" className="py-0 mt-2 d-flex justify-content-center align-items-center"><BsPlus id="plus-icon"></BsPlus>Follow</Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    )
}

export default Interests

