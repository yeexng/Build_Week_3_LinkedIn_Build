import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Modal, Row, Col, Alert } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import {
  deletePostAction,
  getPostAction,
  sendPostAsyncAction,
} from "../redux/actions";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

import LikeAndUnlike from "./LikeAndUnlike";
import { BsUpload } from "react-icons/bs";

const NewsFeedMiddle = () => {
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);
  //   const thePostId = useSelector((state) => state.getPostsWithId.content);

  const [show, setShow] = useState(false);
  const [file, setFile] = useState();
  //   const [changed, setChanged] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = useState({
    text: "", // the only property you need to send
    username: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    dispatch(getPostAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  {/* <input
                    style={{ display: "none" }}
                    ref={inputRef}
                    type="file"
                    name="file"
                    onChange={handleFile}
                  />
                  <Button
                    id="profile-pic-update-buttons text-dark"
                    className="p-2"
                    onClick={handleClick}
                  >
                    <BsUpload></BsUpload>
                    <p className="mb-0">UPLOAD</p>
                  </Button> */}
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
          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            name="file"
            onChange={handleFile}
          />
          <Button
            id="profile-pic-update-buttons  "
            className="p-2 text-light mr-1 button-to-style mx-3"
            onClick={handleClick}
          >
            <BsUpload id="button-to-style"></BsUpload>
            <span className="ml-2">IMG</span>
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(sendPostAsyncAction(post, file));
              dispatch(getPostAction());
              handleClose();
              //   dispatch(getPostAction());
              alert("Your post have been saved!");
            }}
          >
            POST
          </Button>
        </Modal.Footer>
        {file && (
          <Alert variant="success" className="mb-3">
            You selected:{" "}
            <strong>
              <em>{file.name}</em>
            </strong>{" "}
            <span className="ml-5">
              Press <strong>POST</strong> to proceed
            </span>
          </Alert>
        )}
      </Modal>
      {allPosts &&
        allPosts
          .slice(Math.max(allPosts.length - 5, 0))
          .reverse()
          .map((singlePost, i) => {
            return (
              <Row className="flex-column-reverse" key={singlePost._id}>
                <Col>
                  <Card id="news-feed-mid-section-lower" className="my-3">
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
                      {singlePost.image && (
                        <div>
                          <img
                            src={singlePost.image}
                            alt=""
                            className="image-post"
                          />
                        </div>
                      )}
                    </div>
                    <div className="parent-button-delete-post d-flex justify-content-end">
                      <div className="text-center">
                        <Button
                          className="button-edit-post pl-3 mb-3"
                          onClick={() => navigate(`/posts/${singlePost._id}`)}
                        >
                          <i className="bi bi-pencil-fill"></i>
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
                    <LikeAndUnlike
                      singlePost={singlePost}
                      i={i}
                    ></LikeAndUnlike>
                  </Card>
                </Col>
              </Row>
            );
          })}
    </>
  );
};

export default NewsFeedMiddle;
