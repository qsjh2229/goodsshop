import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot-bg">
      <div className="container">
        <div className="footer-addr">
          <h3 className="foot-logo">
            {" "}
            <span>로고</span>
          </h3>
          <address>
            서울 서초구 서초동 1153동 13654 채욱빌딩 10층 1005호
          </address>
          <div className="copy">&copy; 2023 ALL RIGHT hong</div>
        </div>
        <div className="footer-menu">
          <ul>
            <li>
              <Link to="">About</Link>
              <ul>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">blog</Link>
              <ul>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">product</Link>
              <ul>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
                <li>
                  <Link to="">company</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
