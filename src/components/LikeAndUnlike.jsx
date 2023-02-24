import { useDispatch, useSelector } from "react-redux";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { RxLoop } from "react-icons/rx";
import { IoIosSend } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { likeAction, unlikeAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";

const LikeAndUnlike = (props) => {
  const like = useSelector((state) => state.like.like);
  const dispatch = useDispatch();
  console.log(props.singlePost._id);
  const isLike = like.includes(props.singlePost._id);

  return (
    <div className="card-footer p-0">
      <Row className="justify-content-center align-items-center">
        <Col className="text-center comment-box pt-2">
          {isLike ? (
            <button
              className="comment-box-btn ml-3"
              onClick={() => {
                dispatch(unlikeAction(props.singlePost._id));
              }}
            >
              <AiTwotoneLike className="comment-box-btn-icon  mr-1" />
              Unlike
            </button>
          ) : (
            <button
              className="comment-box-btn ml-3"
              onClick={() => {
                dispatch(likeAction(props.singlePost._id));
              }}
            >
              <AiOutlineLike className="comment-box-btn-icon  mr-1" />
              Like
            </button>
          )}
        </Col>
        <Col className="text-center comment-box pt-2">
          <button className="comment-box-btn">
            <TfiCommentAlt className="comment-box-btn-icon  mr-1" /> Comment
          </button>
        </Col>
        <Col className="text-center comment-box pt-2">
          <button className="comment-box-btn">
            <RxLoop className="comment-box-btn-icon mr-1" /> Repost
          </button>
        </Col>
        <Col className="text-center comment-box pt-2">
          <button className="comment-box-btn mr-3">
            <IoIosSend className="comment-box-btn-icon  mr-1" /> Send
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default LikeAndUnlike;
