import React from "react";
import "../../App.css";
import "./header.css";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import SubHead from "./SubHead";
import logo from "../../assets/logo.png";
const Header = () => {
  const userCookie = Cookies.get("user");

  return (
    <div>
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
    </div>
  );
};

export default Header;
