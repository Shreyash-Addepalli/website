import React from "react";
import "./Footer.css";
import { FaDiscord, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social">
        <a href="https://www.instagram.com/de_plandao">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/de_planDAO">
          <FaTwitter />
        </a>
        <a href="https://t.me/akshay93aditya">
          <FaTelegram />
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="https://airtable.com/shrcRaQxpWF0RofzC">Join Us</a>
        </li>
        <li>
          <a href="https://de-plan.notion.site/de_plan-Workspace-7513a7123f5f4a46adba6d2476de2287">Workspace</a>
        </li>
        <li>
          <a href="mailto:teamde.plan@gmail.com?cc=akshay93aditya@gmail.com,shreyash.addepalli@gmail.com">Contact Us</a>
        </li>
      </ul>
      <p className="copyright">de_plan@2022</p>
    </section>
  );
};

export default Footer;
