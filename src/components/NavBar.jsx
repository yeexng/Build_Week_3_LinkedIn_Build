import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProfileActionAsync,
  getSearchResultActionAsync,
} from "../redux/actions";
import "../styles/navbar.css";

const NavBar = () => {
  const [searchValue, getSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfileActionAsync());
  }, []);

  let allProfiles = useSelector((state) => state.profile.content);
  const handleChange = (e) => {
    e.preventDefault();
    console.log(allProfiles[0]);
    dispatch(getSearchResultActionAsync(allProfiles[0], searchValue));
  };

  let modal = document.getElementById("myModal");
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
  const headerChange = function () {
    if (window.pageYOffset > 500) {
      document.querySelector(".second-nav").classList.add("scrolled-bg");
      document.querySelector(".second-nav").classList.remove("back-bg");
    } else if (window.pageYOffset < 500) {
      document.querySelector(".second-nav").classList.remove("scrolled-bg");
      document.querySelector(".second-nav").classList.add("back-bg");
    }
  };
  window.addEventListener("scroll", headerChange);

  return (
    <div className="d-flex flex-column">
      <Navbar className="fixed-top" id="top-nav">
        <Container>
          <Navbar.Brand href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              className="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Navbar.Brand>
          <Form inline id="search-form-wrapper" onSubmit={handleChange}>
            <i className="bi bi-search"></i>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 show-search"
              value={searchValue}
              onChange={(e) => getSearchValue(e.target.value)}
            />
            {/* <Button variant="outline-primary">Search</Button> */}
          </Form>
          {/* <div id="search-popup">testing</div> */}
          <Nav className="ml-auto ">
            <Nav.Link href="#actionh">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <p className="text-gone">Home</p>
            </Nav.Link>
            <Nav.Link href="actionmn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>{" "}
              <p className="text-gone">My Network</p>
            </Nav.Link>
            <Nav.Link href="actionj">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <p className="text-gone">Jobs</p>
            </Nav.Link>
            <Nav.Link href="actionm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <p className="text-gone">Messaging</p>
            </Nav.Link>
            <Nav.Link href="#actionn" id="notification-parent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <div id="notification-number">3</div>
              <p className="text-gone">Notifications</p>
            </Nav.Link>

            <Nav.Link href="#action2" className="profile-nav-wrapper">
              <img
                src="https://media.licdn.com/dms/image/D4D35AQFilr9Ny9Omtw/profile-framedphoto-shrink_100_100/0/1676278321328?e=1677488400&v=beta&t=TNNocJ-IsccLkheGYxknHhPRy_f90nrQPVto9lHM8bc"
                alt="profile in navigation bar"
                className="profile-photo text-gone"
              />

              <NavDropdown title="Me" id="dropdown-menu">
                <div className="d-flex flex-column  justify-content-center ">
                  <div className="d-flex pl-1">
                    <div>
                      {" "}
                      <img
                        src="https://media.licdn.com/dms/image/D4D35AQFilr9Ny9Omtw/profile-framedphoto-shrink_100_100/0/1676278321328?e=1677488400&v=beta&t=TNNocJ-IsccLkheGYxknHhPRy_f90nrQPVto9lHM8bc"
                        alt="profile in navigation bar"
                        className="profile-photo-dropdown"
                      />
                    </div>
                    <div>
                      <strong>Piotr Rodzen</strong>{" "}
                      <p>
                        <small>Full stack</small>
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button className="w-100 bg-transparent text-primary view-profile-button">
                      View Profile
                    </Button>
                  </div>
                </div>

                <NavDropdown.Divider />
                <p className="mb-0">
                  <strong>Account</strong>
                </p>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">
                    💽<strong>Try premium for free</strong>
                  </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">Settings and privacy</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">Help</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">Language</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <p className="mb-0">
                  <strong>Manage</strong>
                </p>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">Posts & Activity</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <p className="mb-0">Job Posting Account</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Sign out</NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>

            <div className="d-flex right-nav">
              <div href="#features" className=" modal-icon-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                  id="myBtn"
                  onClick={() =>
                    (document.getElementById("myModal").style.display = "block")
                  }
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <p className="text-gone">
                  work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match text-gone"
                    width="16"
                    height="16"
                    focusable="false"
                    id="myBtn"
                    onClick={() =>
                      (document.getElementById("myModal").style.display =
                        "block")
                    }
                  >
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                  </svg>
                </p>
              </div>

              <Nav.Link href="#" className="get-hired-text">
                <p>Get Hired Faster,</p>
                <p>Try Premium Free</p>{" "}
              </Nav.Link>
            </div>
            {/* <button
            id="myBtn"
            onClick={() =>
              (document.getElementById("myModal").style.display = "block")
            }
          >
            Open Modal */}
            {/* </button> */}
            <div id="myModal" className="modal">
              <div className="modal-content">
                <div className="modal-header">
                  <h2>Work</h2>
                  <span
                    className="close"
                    onClick={() =>
                      (document.getElementById("myModal").style.display =
                        "none")
                    }
                  >
                    &times;
                  </span>
                </div>

                <div className="modal-body">
                  <div className="modal-text-header">
                    Visit More LinkedIn Products
                  </div>
                  <div id="modal-icon-wrapper">
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-jobs-posting-@1-a"
                            x1="-6.68"
                            y1="-1"
                            x2="25.05"
                            y2="26.36"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          fill="none"
                          stroke="#caedff"
                          strokeMiterlimit="10"
                          strokeWidth="2"
                          d="M20 8.67l-4 6.66M20 8.67l4 6.66"
                        ></path>
                        <rect
                          x="8"
                          y="14"
                          width="24"
                          height="16"
                          rx="1"
                          ry="1"
                          fill="url(#app-jobs-posting-@1-a)"
                        ></rect>
                        <path fill="#65c3e8" d="M12 18h16v3H12z"></path>
                        <path fill="#33aada" d="M15 23h10v3H15z"></path>
                        <circle cx="20" cy="9" r="2" fill="#65c3e8"></circle>
                      </svg>
                      <p>Post a job</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-learning-@1-a"
                            x1="7.18"
                            y1="6.98"
                            x2="13.8"
                            y2="20.22"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#33aada"></stop>
                            <stop offset="1" stopColor="#0091ca"></stop>
                          </linearGradient>
                          <linearGradient
                            id="app-learning-@1-b"
                            x1="12.96"
                            y1="-17.55"
                            x2="27.9"
                            y2="24.33"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="M20 30H8a1 1 0 01-1-1V11a1 1 0 011-1h12v20z"
                          fill="url(#app-learning-@1-a)"
                        ></path>
                        <path
                          d="M20 10h12a1 1 0 011 1v18a1 1 0 01-1 1H20V10z"
                          fill="url(#app-learning-@1-b)"
                        ></path>
                        <path
                          fill="#33aada"
                          d="M9 19h8v2H9zM9 23h8v2H9zM9 15h8v2H9z"
                        ></path>
                        <path
                          fill="#006097"
                          d="M23 19h8v2h-8zM23 23h8v2h-8zM23 15h8v2h-8z"
                        ></path>
                        <path
                          d="M17.41 15.25l7.46 4.52a.27.27 0 010 .46l-7.46 4.52a.27.27 0 01-.41-.23v-9a.27.27 0 01.41-.27z"
                          fill="#fff"
                        ></path>
                      </svg>
                      <p>Learning</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-talent-insights-medium-a"
                            x1="34.05"
                            y1="44.47"
                            x2="13.67"
                            y2="19.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <path
                          d="M25 6H10a1 1 0 00-1 1v25a1 1 0 001 1h20a1 1 0 001-1V12z"
                          fill="#caedff"
                        ></path>
                        <path fill="#65c3e8" d="M25 6v6h6l-6-6z"></path>
                        <path
                          d="M20 19a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v12h6zm8 11v-8h-5v9h4a1 1 0 001-1zm-17-5H9v5a1 1 0 001 1h4z"
                          fill="url(#app-talent-insights-medium-a)"
                        ></path>
                      </svg>
                      <p>Insights</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-ads-@1-a"
                            x1="34.78"
                            y1="3.84"
                            x2="14.66"
                            y2="25.84"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <g fill="url(#app-ads-@1-a)">
                          <path d="M20 11.88A8.13 8.13 0 1111.88 20 8.13 8.13 0 0120 11.88M20 9a11 11 0 1011 11A11 11 0 0020 9z"></path>
                          <circle cx="20" cy="20" r="4"></circle>
                        </g>
                        <circle
                          cx="20"
                          cy="20"
                          r="2"
                          transform="rotate(-45 20.002 19.995)"
                          fill="#33aada"
                        ></circle>
                        <path
                          fill="#33aada"
                          d="M24.246 12.932l2.829 2.828-5.657 5.657-2.828-2.829z"
                        ></path>
                        <path
                          fill="#33aada"
                          d="M29.19 16.46l-4.95-.7-.7-4.95 4.94-4.95L29 11l5.14.52-4.95 4.94z"
                        ></path>
                      </svg>
                      <p>Advertise</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-sales-navigator-@1-a"
                            x1="40.53"
                            y1="-53.4"
                            x2="20.23"
                            y2="19.17"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                        </defs>
                        <circle
                          cx="20"
                          cy="20"
                          r="14"
                          fill="url(#app-sales-navigator-@1-a)"
                        ></circle>
                        <path
                          d="M17.17 17.17L27.42 12a.4.4 0 01.18 0 .39.39 0 01.4.39.42.42 0 010 .19l-5.17 10.25z"
                          fill="#fff"
                        ></path>
                        <path
                          d="M17.17 17.17L12 27.42a.42.42 0 000 .19.39.39 0 00.37.38.45.45 0 00.21 0l10.25-5.12z"
                          fill="#98d8f4"
                        ></path>
                        <circle cx="20" cy="20" r="4" fill="#fff"></circle>
                        <circle cx="20" cy="20" r="2" fill="#0073b1"></circle>
                      </svg>
                      <p>Sell</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <defs>
                          <linearGradient
                            id="app-groups-@1-b"
                            x1="1.84"
                            y1="-24.59"
                            x2="20.66"
                            y2="25.05"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#665ed0"></stop>
                            <stop offset="1" stopColor="#0073b1"></stop>
                          </linearGradient>
                          <clipPath id="app-groups-@1-a">
                            <path
                              d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                              fill="none"
                            ></path>
                          </clipPath>
                        </defs>
                        <path
                          d="M18.17 9.15a11 11 0 00-7.76 16.23l-2 5.6a.47.47 0 00.63.59l5.21-2.23a11 11 0 103.92-20.19z"
                          fill="#caedff"
                        ></path>
                        <circle cx="29" cy="16" r="3" fill="#0091ca"></circle>
                        <circle cx="11" cy="16" r="3" fill="#0091ca"></circle>
                        <g clipPath="url(#app-groups-@1-a)">
                          <path
                            d="M20 18a4 4 0 114-4 4 4 0 01-4 4zm3 2h-6v16h6V20z"
                            fill="url(#app-groups-@1-b)"
                          ></path>
                          <path
                            fill="#0091ca"
                            d="M26 21h6v14h-6zM8 21h6v14H8z"
                          ></path>
                        </g>
                      </svg>{" "}
                      <p>Groups</p>
                    </div>
                    <div className="icon-smaller-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                        data-supported-dps="40x40"
                        width="40"
                        height="40"
                        focusable="false"
                      >
                        <circle cx="20" cy="12" r="4" fill="#0073b1"></circle>
                        <path
                          d="M31.88 13.46L16.17 29.17 18 31a1.37 1.37 0 002 0l14.71-14.71a1.13 1.13 0 00.29-.8.89.89 0 00-.29-.61l-1.41-1.42a1 1 0 00-1.42 0z"
                          fill="#0091ca"
                        ></path>
                        <path
                          d="M21.83 29.17L20 31a1.35 1.35 0 01-1 .4 1.36 1.36 0 01-1-.4l-8.71-8.71a1 1 0 010-1.41l1.41-1.41a1.07 1.07 0 01.76-.29.94.94 0 01.65.29z"
                          fill="#33aada"
                          opacity=".8"
                        ></path>
                        <path
                          fill="#0073b1"
                          d="M19 26.34l4-4V18h-6v6.34l2 2z"
                        ></path>
                      </svg>
                      <p>Service</p>
                      <p>Marketplace</p>
                    </div>
                  </div>
                </div>
                <div className="modal-body-middle">
                  <div className="modal-text-header">
                    LinkedIn Business Services
                  </div>
                  <div>
                    <ul>
                      <li>
                        <strong>Talent Solutions </strong>
                        <br />
                        <small>Find, attrack and recruit talent</small>
                      </li>
                      <li>
                        <strong>Sales Solutions </strong>
                        <br />
                        <small>Unlock sales opportunities</small>
                      </li>
                      <li>
                        <strong>Post a job for free </strong>
                        <br />
                        <small>
                          Get your job in front of quality candidates
                        </small>
                      </li>
                      <li>
                        <strong>Marketing Solutions </strong>
                        <br />
                        <small>Acquire customers and grow your business</small>
                      </li>
                      <li>
                        <strong>Learning Solutions </strong>
                        <br />
                        <small>Develop talent across your organisation</small>
                      </li>
                    </ul>
                    <p className="modal-body-bottom">
                      <strong>Create a Company Page</strong>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className=" justify-content-between  second-nav " id="second-nav">
        <Container>
          <div className="d-flex justify-content-between w-100">
            <div>
              <div className="d-flex pl-1  pt-3">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/D4D35AQFilr9Ny9Omtw/profile-framedphoto-shrink_100_100/0/1676278321328?e=1677488400&v=beta&t=TNNocJ-IsccLkheGYxknHhPRy_f90nrQPVto9lHM8bc"
                    alt="profile in navigation bar"
                    className="profile-photo-dropdown"
                  />
                </div>
                <div>
                  <strong>Piotr Rodzen</strong>
                  <p>
                    <small>Full stack</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <Button className="btn-more">More</Button>
              <Button className="btn-add-profile-section">
                Add profile section
              </Button>
              <Button className="btn-open-to">Open to</Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
