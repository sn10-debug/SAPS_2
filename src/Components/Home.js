import React from "react";
import Logo from "./HomeLogo";
import { Link } from "react-router-dom";
// import ImgLogo from "../images/Main-image.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <br />
        <img src={"./images/Main-image.png"} className="main-image" />
        <div className="home-container-1">
          <span className="home-text">
            A place for the differently abled and elderdery.
          </span>
          <span className="home-text-1">
            Best experienced with a mobile application.
          </span>
          <div className="home-container-2">
            <Link to={"/info"}>
              <button className="home-text-2">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
