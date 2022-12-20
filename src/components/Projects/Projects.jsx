import "./Projects.css";
import React from "react";

import ostrom from "../../assets/ostrom.svg";
import proto from "../../assets/proto.svg";
import unic from "../../assets/unic.svg";

const Projects = () => {
  return (
    <div class="grid-container">
      <div class="grid-child2">
        <div
          className="heading1"
          style={{
            display: `flex`,
            paddingTop: `20px`,
            justifyContent: `left`,
            paddingLeft: `24px`,
          }}
        >
          <img
            src={proto}
            alt="ostrom"
            style={{
              paddingRight: `15px`,
              width: `64px`,
              height: `64px`,
            }}
          />
          <div
            className="ostromh"
            style={{
              fontSize: `32px`,
              paddingTop: `17px`,
              fontFamily: `SBold`,
            }}
          >
            proto
          </div>
        </div>
        <div
          className="content1"
          style={{
            margin: `auto`,
            paddingTop: `51px`,
            textAlign: `left`,
            width: `291px`,
            fontFamily: `Montserrat`,
            fontWeight: `400`,
          }}
        >
          <strong style={{ fontFamily: `Bold` }}>Proto</strong> is a spatial data registry with{" "}
          <span className="regen" style={{ color: `#14aede` }}>
            decentralized proof of location
          </span>{" "}
          and location based services on Solana.
        </div>
      </div>
      <div class="grid-child1">
        <div
          className="heading1"
          style={{
            display: `flex`,
            paddingTop: `20px`,
            justifyContent: `left`,
            paddingLeft: `24px`,
          }}
        >
          <img
            src={ostrom}
            alt="ostrom"
            style={{
              paddingRight: `15px`,
              width: `64px`,
              height: `64px`,
            }}
          />
          <div
            className="ostromh"
            style={{
              fontSize: `32px`,
              paddingTop: `17px`,
              fontFamily: `SBold`,
            }}
          >
            ostrom
          </div>
        </div>
        <div
          className="content1"
          style={{
            margin: `auto`,
            paddingTop: `51px`,
            textAlign: `left`,
            width: `291px`,
            fontFamily: `Montserrat`,
            fontWeight: `400`,
          }}
        >
          <strong style={{ fontFamily: `Bold` }}>Ostrom</strong> is a community
          based development{" "}
          <span className="regen" style={{ color: `#D2EE25` }}>
            solution for land regeneration.
          </span>{" "}
          We make environmental regeneration, financially viable in the global south.
        </div>
      </div>
      <div class="grid-child3">
        <div
          className="heading1"
          style={{
            display: `flex`,
            paddingTop: `20px`,
            justifyContent: `left`,
            paddingLeft: `24px`,
          }}
        >
          <img
            src={unic}
            alt="ostrom"
            style={{
              paddingRight: `15px`,
              width: `64px`,
              height: `64px`,
            }}
          />
          <div
            className="ostromh"
            style={{
              fontSize: `32px`,
              paddingTop: `17px`,
              fontFamily: `SBold`,
            }}
          >
            unic
          </div>
        </div>
        <div
          className="content1"
          style={{
            margin: `auto`,
            paddingTop: `51px`,
            textAlign: `left`,
            width: `291px`,
            fontFamily: `Montserrat`,
            fontWeight: `400`,
          }}
        >
         <strong style={{ fontFamily: `Bold` }}>Unic</strong> is a Web3 native {" "}
          <span className="regen" style={{ color: `#f9436f` }}>
           IoT solution for DMRV
          </span>{" "}
          We minimize MRV efforts by providing out of the box IoT.
        </div>
      </div>
    </div>
  );
};

export default Projects;
