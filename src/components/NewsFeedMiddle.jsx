import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Form,
  Modal,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  deletePostAction,
  getPostAction,
  getPostWithIdAction,
  likeAction,
  sendPostAsyncAction,
  unlikeAction,
} from "../redux/actions";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";
import { IoIosSend } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";

const NewsFeedMiddle = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);
  const [show, setShow] = useState(false);
  const like = useSelector((state) => state.like.like);

  const [showPost, setShowPost] = useState(false);
  const handleClosePlus = () => setShowPost(false);
  const handleShowPlus = () => setShowPost(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState({
    text: "", // the only property you need to send
    username: "",
  });
  //   const [postToUpdate, setPostToUpdate] = = useState({
  //     text: "", // the only property you need to send
  //     username: "",
  //   });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPostAction());
  }, []);

  //   const postWithId = useSelector((state) => state.getPostsWithId.content);
  const allPosts = useSelector((state) => state.getPosts.content);

  return (
    <>
      <Card id="news-feed-mid-section">
        <div className="d-flex flex-column">
          <div className="d-flex">
            <img
              src={userProfileAPIRS && userProfileAPIRS.image}
              alt="profile"
              className="profile-middle m-2"
            ></img>
            <Button
              className="w-100 m-3 post-button"
              onClick={() => {
                handleShow();
              }}
            >
              <span>Start a post</span>
            </Button>
          </div>
          <div className="d-flex justify-content-around mb-3">
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="svg-photo"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
              </svg>
              <span>Photo</span>
            </Button>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="svg-video"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
              </svg>
              <span>Video</span>{" "}
            </Button>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="svg-event"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
              </svg>
              <span>Event</span>
            </Button>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="svg-article"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
              </svg>
              <span>Write artice</span>
            </Button>
          </div>
        </div>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        id="modal-post-news"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column mx-2 my-2">
            <div className="d-flex">
              <img
                src={userProfileAPIRS && userProfileAPIRS.image}
                alt="profile"
                className="profile-middle m-2"
              ></img>
              <div>
                <p>
                  <strong>
                    {userProfileAPIRS && userProfileAPIRS.name}{" "}
                    {userProfileAPIRS && userProfileAPIRS.surname}
                  </strong>
                </p>
              </div>
            </div>
            <div className="form-outline">
              <Form>
                <Form.Group className="form-outline">
                  <br></br>
                  <Form.Control
                    id="textAreaExample"
                    as="textarea"
                    rows={10}
                    value={post.text}
                    onChange={(e) => {
                      setPost({
                        ...post,
                        text: e.target.value,
                        username:
                          userProfileAPIRS.name + userProfileAPIRS.surname,
                      });
                    }}
                  />
                  <label className="form-label" htmlFor="textAreaExample">
                    <p className="mb-5 pb-5">Post content!</p>
                  </label>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(sendPostAsyncAction(post));
              dispatch(getPostAction());
              alert("Your post have been saved!");
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {allPosts &&
        allPosts
          .slice(Math.max(allPosts.length - 5, 0))
          .reverse()
          .map((singlePost) => {
            return (
              <Row className="flex-column-reverse">
                <Col>
                  <Card
                    id="news-feed-mid-section-lower"
                    className="my-3"
                    key={singlePost._id}
                  >
                    <div className="d-flex flex-column mx-2 my-2">
                      <div className="d-flex">
                        <img
                          src={singlePost && singlePost.user.image}
                          alt="profile"
                          className="profile-middle m-2"
                        ></img>
                        <div>
                          <p>
                            <strong>{singlePost.username}</strong>
                          </p>
                          <p>
                            <em>{singlePost.user.title}</em>
                          </p>
                          <p>
                            Date Posted:{" "}
                            {format(
                              parseISO(singlePost.createdAt),
                              "PPP ' 'HH':'m"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="mx-3 my-5">{singlePost.text}</div>
                    </div>
                    <div className="parent-button-delete-post d-flex justify-content-end">
                      <div className="text-center">
                        <Button
                          className="button-edit-post pl-3 mb-3"
                          onClick={() => navigate(`/posts/${singlePost._id}`)}
                        >
                          <i class="bi bi-pencil-fill"></i>
                        </Button>
                      </div>
                      <div className="text-center">
                        <Button
                          className="button-delete-post pl-3 mb-3"
                          onClick={() => {
                            dispatch(deletePostAction(singlePost._id));
                          }}
                        >
                          <i className="bi bi-trash3-fill"></i>
                        </Button>
                      </div>
                    </div>
                    <div className="card-footer p-0">
                      <Row className="justify-content-center align-items-center">
                        <Col className="text-center comment-box pt-2">
                          {/* {like.includes(singlePost) ? ( */}
                          <button
                            className="comment-box-btn ml-3"
                            onClick={dispatch(likeAction(singlePost))}
                          >
                            <AiOutlineLike className="comment-box-btn-icon  mr-1" />
                            Like
                          </button>
                          {/* ) : (
                            <button
                              className="comment-box-btn ml-3"
                              onClick={dispatch(unlikeAction(singlePost))}
                            >
                              <AiTwotoneLike className="comment-box-btn-icon  mr-1" />
                              Unlike
                            </button>
                          )} */}
                        </Col>
                        <Col className="text-center comment-box pt-2">
                          <button className="comment-box-btn">
                            <TfiCommentAlt className="comment-box-btn-icon  mr-1" />{" "}
                            Comment
                          </button>
                        </Col>
                        <Col className="text-center comment-box pt-2">
                          <button className="comment-box-btn">
                            <RxLoop className="comment-box-btn-icon mr-1" />{" "}
                            Repost
                          </button>
                        </Col>
                        <Col className="text-center comment-box pt-2">
                          <button className="comment-box-btn mr-3">
                            <IoIosSend className="comment-box-btn-icon  mr-1" />{" "}
                            Send
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              </Row>
            );
          })}
      <Modal show={showPost} onHide={handleClosePlus}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Experience</Modal.Title>
        </Modal.Header>

        <InputGroup className="mb-3 px-4">
          <InputGroup.Text id="basic-addon1">Post Content</InputGroup.Text>
          <Form.Control
            aria-label=""
            aria-describedby="basic-addon1"
            id="experience-role"
          />
        </InputGroup>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePlus}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch();
              dispatch();
            }}
          >
            Create Experience
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NewsFeedMiddle;
