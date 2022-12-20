import React from "react";
import "./Footer.css";
import {  FaInstagram, FaTwitter } from "react-icons/fa";

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
//         <a href="https://t.me/akshay93aditya">
//           <FaTelegram />
//         </a>
      </div>
      <ul className="list">
        <li>
          <a onClick={() => {
              window.open(
                "https://airtable.com/shrcRaQxpWF0RofzC"
              );
            }}>Join Us</a>
        </li>
        <li>
          <a onClick={() => {
              window.open(
                "https://de-plan.notion.site/de_plan-Workspace-7513a7123f5f4a46adba6d2476de2287"
              );
            }}>Workspace</a>
        </li>
        <li>
          <a href="mailto:team@de-plan.xyz?cc=shreyash@de-plan.xyz">Contact Us</a>
        </li>
      </ul>
      <p className="copyright">de_plan@2022</p>
    </section>
  );
};

export default Footer;
