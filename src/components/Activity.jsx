import { Row, Col, Button } from "react-bootstrap";

const Activity = () => {
    return (
        <>
            <Row className="d-flex flex-column edit-section bg-white mr-2 mt-2" id="round-corners">
                <Col className="d-flex flex-column mt-3 mb-3">
                    <div className="d-flex align-items-center">
                        <div>
                            <p id="left-side-headers" className="mb-0">Activity</p>
                            <a href="">666 followers</a>
                        </div>
                        <div className="ml-auto">
                            <Button variant="primary" id="main-buttons">Start a post</Button>
                        </div>

                    </div>

                </Col>
                <Col id="post-details">
                    <p><span id="activity-user">USER</span> posted this · 2w</p>
                </Col>
                <Col>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem, ratione consectetur maiores neque libero nisi quae! Molestias odit excepturi, et aperiam deserunt tempore harum! Hic voluptatibus delectus dicta temporibus?</p>
                </Col>
                <Col className="d-flex mb-2">
                    <Col className="px-0">
                        <img id="post-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sunsetsound.com%2Fwp-content%2Fuploads%2F2015%2F09%2FJESS9334.jpg&f=1&nofb=1&ipt=b78d861bc23617d54912094d08c5ca24eb2fe0c803348b15c133971ad423175c&ipo=images" alt="" />
                    </Col>
                    <Col xs={11} md={11} lg={11} className="pl-1">
                        <p id="mini-headers" className="mb-0">Recording at Sunset Studios!</p>
                        <p id="post-details">2 min read</p>
                    </Col>

                </Col>
                <Col className="d-flex" >
                    <img id="post-reactions-image" src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
                    <img id="post-reactions-image" src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="" />
                    <img id="post-reactions-image" src="https://static.licdn.com/sc/h/3wqhxqtk2l554o70ur3kessf1" alt="" />
                    <p id="post-details">666</p>
                </Col>
            </Row>
        </>
    )
}

export default Activity