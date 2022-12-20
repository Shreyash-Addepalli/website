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
          style={{
            fontSize: `64px`,
            fontFamily: `Bold`,
            fontWeight: `800`,
            color: `#343235`,
          }}
        >
          <ReactTextTransition springConfig={presets}>
            {TEXTS[index % TEXTS.length]}
          </ReactTextTransition>
        </p>
      </div>
    </div>
  );
};

export default Header;
