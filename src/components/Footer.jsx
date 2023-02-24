import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="transparent"
      className="text-center text-lg-start text-muted mb-0 mt-2 px-0"
    >
      <MDBContainer className="px-0">
        <section className="mt-3 footer ">
          <MDBContainer className="text-center text-md-start mt-5 px-0">
            <MDBRow className="mt-3 px-0">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" />
                LinkedIn
              </h6>

              <MDBRow>
                <MDBCol>
                  <p>About</p>
                  <p>Community Guidelines</p>
                  <p>Privacy & Terms</p>
                  <p>Sales Solutions</p>
                  <p>Safety Center</p>
                </MDBCol>

                <MDBCol>
                  <p>Accessibility</p>
                  <p>Careers</p>
                  <p>Ad Choices</p>
                  <p>Mobile</p>
                </MDBCol>

                <MDBCol>
                  <p>Talent Solutions</p>
                  <p>Marketing Solutions</p>
                  <p>Advertising</p>
                  <p>Small Business</p>
                </MDBCol>

                <MDBCol>
                  <MDBRow>
                    <MDBCol md={2}>
                      <AiFillQuestionCircle className="footer-icon" />
                    </MDBCol>
                    <MDBCol>
                      <h6>Questions?</h6>
                      <p>Visit our Help Center</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md={2}>
                      <IoMdSettings className="footer-icon" />
                    </MDBCol>
                    <MDBCol>
                      <h6>Manage your account and privacy</h6>
                      <p>Go to your Settings</p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <p>Select Language</p>
                  <MDBDropdown>
                    <MDBDropdownToggle color="secondary">
                      English(English)
                    </MDBDropdownToggle>
                    <MDBDropdownMenu dark>
                      <MDBDropdownItem link>Spanish</MDBDropdownItem>
                      <MDBDropdownItem link>Italian</MDBDropdownItem>
                      <MDBDropdownItem link>German</MDBDropdownItem>
                      <MDBDropdownItem link>Chinese</MDBDropdownItem>
                      <MDBDropdownItem link>Japanese</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBCol>
                <MDBRow>
                  <p>Bati&Sam&Piotr Corporation © 2023</p>
                </MDBRow>
              </MDBRow>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
