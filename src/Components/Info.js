import React from "react";

class Info extends React.Component {
  render() {
    return (
      <div className="info-container">
        <div className="info-container-1">
          <div className="info-container-2">
            <span className="info-text">TEXT TO SPEECH CONVERSION</span>
          </div>
          <div className="info-container-3">
            <div className="info-container-4">
              <span className="info-text-1">HAND GESTURES KEYBOARD</span>
            </div>
            <div className="info-container-5">
              <img className="info-image" src={"/images/mic_second.png"} />
              <img
                className="info-image-1"
                src={"/images/keyboard_second.png"}
              />
              <span className="info-text-2">SPEECH TO TEXT CONVERSION</span>
            </div>
          </div>
        </div>
        <div className="info-container-6">
          <div className="info-container-7">
            <img
              className="info-image-2"
              src={"/images/logo_medicare_three.png"}
            />
            <div className="info-container-8">
              <img className="info-image-3" src={"/images/mobile1_three.png"} />
              <span className="info-text-3"> SAPS MEDICARE</span>
              <span className="info-text-4">
                A one stop solution for tracking all your medical needs.{" "}
              </span>
              <div className="info-container-9">
                <div className="info-container-10">
                  <img className="info-image-4" src={"/images/alarm.png"} />
                  <span className="info-text-5">SET ALARMS</span>
                </div>
                <div className="info-container-11">
                  <img
                    className="info-image-5"
                    src={"/images/appointment_three.png"}
                  />
                  <span className="info-text-6">
                    KEEP TRACK OF APPOINTMENTS
                  </span>
                </div>
                <div className="info-container-12">
                  <img
                    className="info-image-6"
                    src={"/images/delivery_three.png"}
                  />
                  <span className="info-text-7">PLACE ORDERS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
