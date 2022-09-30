import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <br />
        <img className="main-image" src={"../images/Main-image.png"} />
        <div className="home-container-1">
          <span className="home-text">
            A place for the differently abled and elderdery.
          </span>
          <span className="home-text-1">
            Best experienced with a mobile application.
          </span>
          <div className="home-container-2">
            <span className="home-text-2">Learn More</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
