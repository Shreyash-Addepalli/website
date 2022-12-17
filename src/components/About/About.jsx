import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="cont5">
        <div className="strt1">
          <span
            className="caplet"
            style={{
              float: `left`,
              fontSize: `54px`,
              fontFamily: "Montserrat",
              fontWeight: `500`,
              lineHeight: `56px`,
            }}
          >
            W
          </span>
          e’re structured as a modern day cooperative, think-tank. Unlike
          traditional design and planning firms, we’re not restricted by
          location, typology or expertise. We provide a free-flowing,
          collaborative environment where people can maximize their potential
          and work on a diverse array of projects across the world.
          <br />
          <br /> de_plan has a simple goal, we want the spaces we inhabit to be
          planned by the people who inhabit them. We believe the best mechanisms
          for climate action are at the local/hyperlocal level. We believe the
          best solutions to urban problems are at the community level. We
          believe geospatial data is the first step toward this. And we believe
          that Web3 is the coordination tool to enable these solutions.
        </div>
        <div className="strt2">We’re design and planning DAO</div>
      </div>
    </>
  );
};

export default About;
