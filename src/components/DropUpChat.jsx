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

const DropUpChat = () => {
  const [showShow, setShowShow] = useState(false);
  const toggleShow = () => setShowShow(!showShow);
  return (
    <>
      <div className="chat-box-wrapper">
        <div className="chat-box">
          <div
            className="drop-up-chat d-flex justify-content-between p-3"
            onClick={toggleShow}
          >
            <div>Messaging</div>
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
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  roundedCircle
                />{" "}
                Bati
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  roundedCircle
                />{" "}
                Piotr
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  roundedCircle
                />{" "}
                May
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  roundedCircle
                />{" "}
                Lux
              </MDBListGroupItem>
              <MDBListGroupItem className="px-3">
                <Image
                  className="chat-avatar"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  roundedCircle
                />{" "}
                Riven
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCollapse>
        </div>
      </div>
    </>
  );
};

export default DropUpChat;
