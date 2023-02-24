import React, { useState } from "react";
import {
  MDBCollapse,
  MDBListGroup,
  MDBListGroupItem,
  MDBInput,
} from "mdb-react-ui-kit";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { Image } from "react-bootstrap";
import "../styles/dropUpChat.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleShow } from "../redux/actions";

const DropUpChat = () => {
  // const [showShow, setShowShow] = useState(false);
  // const toggleShow = () => setShowShow(!showShow);
  const dispatch = useDispatch();
  const showShow = useSelector((state) => state.chatReducer.showShow);
  const userProfileAPIRS = useSelector((state) => state.userDataAPI.stock);

  const handleToggleShow = () => {
    dispatch(toggleShow());
  };
  return (
    <>
      <div className="chat-box-wrapper bg-white" id="chatbox-container">
        <div className="chat-box">
          <div
            className="drop-up-chat d-flex justify-content-between p-3"
            onClick={handleToggleShow}
          >
            <div>
              <img
                src={userProfileAPIRS.image}
                alt=""
                id="chat-little-avatar"
                className="mr-2"
              />
              Messaging
            </div>
            <div>
              <BsThreeDots className="mx-1" />
              <FiEdit className="mx-1" />
              {showShow ? (
                <RiArrowDownSLine className="mx-1" />
              ) : (
                <RiArrowUpSLine className="mx-1" />
              )}
            </div>
          </div>
          <MDBCollapse show={showShow}>
            <MDBListGroup light>
              <MDBListGroupItem className="px-1">
                <MDBInput label="Search" id="typeText" type="text" />
              </MDBListGroupItem>

              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9w8MGYZWJsKxxIVuw45dzQHaE8%26pid%3DApi&f=1&ipt=78612d8121a3f4f6506bd76e6ce261a90c5691ef76ae46e58ecf66b94a85e893&ipo=images"
                  roundedCircle
                />{" "}
                Steve Jobs
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.aDAeFFB46yBNYfTymr_QhwHaFj%26pid%3DApi&f=1&ipt=ac9df15fa214816ab573129401c7120fcb201a0b449b76264b819b411df555b9&ipo=images"
                  roundedCircle
                />{" "}
                Derek Zoolander
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://media.licdn.com/dms/image/D4E03AQE0i3os32ueVA/profile-displayphoto-shrink_800_800/0/1677096934286?e=1682553600&v=beta&t=CYKiMO4uEsDEJ-IjZSnjcVrnOB2QZalNjl81Hc-y0FI"
                  roundedCircle
                />{" "}
                Mantas Petrosius
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://media.licdn.com/dms/image/D4E03AQF125Fl8ZB1hg/profile-displayphoto-shrink_800_800/0/1665370239322?e=1682553600&v=beta&t=kDAq5NN3XAdaz8_OYi7aTHICwZWUZRQDYnaUTeu6oZ0"
                  roundedCircle
                />{" "}
                Yasir
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://media.licdn.com/dms/image/C5103AQGmrLRIn_91KA/profile-displayphoto-shrink_800_800/0/1519565533648?e=1682553600&v=beta&t=xzgk86Exm5tW3SYnbpWwojYWsOJa2DvtvDG5T7kL2KE"
                  roundedCircle
                />{" "}
                Best TA ever
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCollapse>
        </div>
      </div>
    </>
  );
};

export default DropUpChat;
