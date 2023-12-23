import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

import Cookies from "js-cookie";
import SubHead from "./SubHead";
import logo from "../../assets/logo.png";
const Header = () => {
  const userCookie = Cookies.get("user");
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 777 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  return (
    <div>
      <Desktop>
        {userCookie ? (
          <SubHead />
        ) : (
          <div className="container sc-4abd7efd-0 fwqFtH">
            <div className="row  sc-4abd7efd-1 cEOECa">
              <div className="col-6 sc-4abd7efd-2 fOlkLG">
                <Link to="/" className="sc-4abd7efd-3 ubXNY">
                  <img className="logo" alt="Logo" src={logo} />
                </Link>
              </div>
              {/* <div className="sc-4abd7efd-2 fOlkLG hide-mobile">
              <div className="sc-4abd7efd-4 bICoNm"></div>
            </div> */}
              <div className="col-6 mx-auto max-w-7xl px-6  lg:px-8 lg:py-20 d-flex justify-content-end">
                <Link
                  to="/login"
                  className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </Link>
                <button style={{ background: "rgba(30, 42, 127, 1)", padding: "12px", borderRadius: "12px", color: "#fff", marginRight: "12px" }}>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </Desktop>
      <Mobile>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" className="sc-4abd7efd-3 ubXNY">
              <img className="logo" alt="Logo" src={logo} />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <HiOutlineBars3BottomRight />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <div className="col-6  max-w-7xl px-6  lg:px-8 lg:py-20">
                  <Link
                    to="/login"
                    className="rounded-md mr-6  py-2.5 text-sm font-semibold text-dark  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Login
                  </Link>
                  <button style={{ background: "rgba(30, 42, 127, 1)", padding: "12px", borderRadius: "12px", color: "#fff", marginRight: "12px" }}>Sign Up</button>
                </div>
              </ul>

            </div>
          </div>
        </nav>
      </Mobile>
    </div>
  );
};

export default Header;
