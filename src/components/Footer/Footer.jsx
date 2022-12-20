import React from "react";
import "./Footer.css";
import {  FaInstagram, FaTwitter } from "react-icons/fa";
import wordcel from "../../assets/wordcel.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social">
        <a onClick={() => {
              window.open(
                "https://www.instagram.com/de_plandao"
              );
            }}>
          <FaInstagram />
        </a>
        <a onClick={() => {
              window.open(
                "https://twitter.com/de_planDAO"
              );
            }}>
          <FaTwitter />
        </a>
<a
          onClick={() => {
            window.open("https://www.wordcelclub.com/de-plan.sol");
          }}
        >
          <img
            src={wordcel}
            alt="wordcel"
            style={{ width: `25px`, height: `25px` }}
          />
        </a>
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
