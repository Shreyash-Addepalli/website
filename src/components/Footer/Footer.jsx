import React from "react";
import "./Footer.css";
import { FaDiscord, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social">
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaTelegram />
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="">Join Us</a>
        </li>
        <li>
          <a href="">Workspace</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <p className="copyright">de_plan@2022</p>
    </section>
  );
};

export default Footer;
