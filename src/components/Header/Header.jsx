import React from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./Header.css";
const TEXTS = ["planners", "environmentalists", "developers", "regens"];

const Header = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="first">
      <div className="para1">
        de_plan is a<br /> network of
        <p
          className="transit"
          style={{ fontSize: `80px`, fontWeight: `800`, color: `#343235` }}
        >
          <ReactTextTransition springConfig={presets}>
            {TEXTS[index % TEXTS.length]}
          </ReactTextTransition>
        </p>
      </div>
      <div className="para2">
        <div
          className="vert"
          style={{
            width: `0`,
            height: `174px`,
            borderLeft: `2px solid black`,
            paddingRight: `40px`,
          }}
        ></div>
        <div
          className="fade-in-image"
          style={{
            height: `174px`,
            display: `flex`,
            justifyContent: `center`,
            textAlign: `left`,
            alignItems: `center`,
            width: `437px`,
          }}
        >
          We’re a global collective of Planners, Architects, Designers and
          Urbanists working on the future of Cities.
        </div>
      </div>
    </div>
  );
};

export default Header;
