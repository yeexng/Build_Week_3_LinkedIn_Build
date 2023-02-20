import React, { useState } from "react";
import { MDBCollapse, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

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
              <MDBListGroupItem className="px-3">Bati</MDBListGroupItem>
              <MDBListGroupItem className="px-3">Piotr</MDBListGroupItem>
              <MDBListGroupItem className="px-3">May</MDBListGroupItem>
              <MDBListGroupItem className="px-3">Lux</MDBListGroupItem>
              <MDBListGroupItem className="px-3">Riven</MDBListGroupItem>
            </MDBListGroup>
          </MDBCollapse>
        </div>
      </div>
    </>
  );
};

export default DropUpChat;
