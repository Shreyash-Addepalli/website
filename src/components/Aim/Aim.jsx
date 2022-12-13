import React, { useState, useRef, useEffect } from "react";
import "./Aim.css";
import { useInView } from "react-intersection-observer";

const Aim = () => { 
  const { ref, inView, entry } = useInView({
    threshold: 0.9,
  });
  return (
    <div className="scroller1">
      <div
        className="subscroll"
        ref={ref}
        style={
          entry && entry.isIntersecting
            ? { overflow: `scroll` }
            : { overflow: `hidden` }
        }
      >
        <div className="rg1">
          <p className="regent">We see a world where </p>
          <p className="growth"> all growth is regenerative</p>
        </div>
        <div className="rg2">
          <p className="regent">We want to enable</p>
          <p className="growth"> local solutions for local problems</p>
        </div>
        <div className="rg3">
          <p className="regent">We create products that</p>
          <p className="growth"> bridge the Web3-IRL gap</p>
        </div>
      </div>
    </div>
  );
};

export default Aim;
