import { Row, Col } from "react-bootstrap";
import { BiPencil, BiPlus } from 'react-icons/bi'

const Education = () => {
    return (
        <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
            <Col className="d-flex flex-column mt-3 mb-3">
                <div className="d-flex align-items-center">
                    <div>
                        <p id="left-side-headers" className="mb-0">Education</p>
                    </div>
                    <div className="ml-auto d-flex" >
                        <p className="mr-3 mb-0" ><BiPlus id="analytics-icons"></BiPlus></p><p className="mb-0"><BiPencil id="analytics-icons"></BiPencil></p>
                    </div>

                </div>

            </Col>
            <Col className="d-flex mb-2">
                <Col lg={1} className="px-0">
                    <img id="post-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.berklee.edu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fscale_and_crop_16_9_large%2Fpublic%2Fd7%2Fbcm%2FBerklee-Stacked-knock-LOGO-15.gif%3Fitok%3Dh6Tecfpn&f=1&nofb=1&ipt=a0399aef833b1f20b9d3e17c2b4efa8bdcd45bf330c8761b0960844e5c29394d&ipo=images" alt="" />
                </Col>
                <Col className="">
                    <p id="mini-headers" className="mb-0">Berklee College of Music</p>
                    <p id="post-details" className="mb-0">Electric Guitar, BA</p>
                    <p id="post-details">Jan 2010 - Nov 2014</p>
                </Col>
            </Col>
            <Col className="d-flex" >

            </Col>
        </Row>
    )
}

export default Education