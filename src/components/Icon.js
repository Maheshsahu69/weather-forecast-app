import React from "react";
import "./Icon.css";
import Cloudy from "../images/cloudy.png";
import Rain from "../images/rain.png";
import Snowing from "../images/snowing.png";
// import Sun from "../images/sun.png";
import Thermameter from "../images/thermameter.png";

const Icon = (props) => {
  switch (props.icon) {
    case 801:
      return <img className="icon" src={Cloudy} alt={Cloudy}></img>;
      break;
    case 802:
      return <img className="icon" src={Cloudy} alt={Cloudy}></img>;
      break;
    case 803:
      return <img className="icon" src={Cloudy} alt={Cloudy}></img>;
      break;
    case 200:
      return <img className="icon" src={Rain} alt={Rain}></img>;
      break;
    case 201:
      return <img className="icon" src={Rain} alt={Rain}></img>;
      break;
    case 202:
      return <img className="icon" src={Rain} alt={Rain}></img>;
      break;
    case 610:
      return <img className="icon" src={Snowing} alt={Snowing}></img>;
      break;
    case 600:
      return <img className="icon" src={Snowing} alt={Snowing}></img>;
      break;
    case 601:
      return <img className="icon" src={Snowing} alt={Snowing}></img>;
      break;
    case 602:
      return <img className="icon" src={Snowing} alt={Snowing}></img>;
      break;
    // case "Sun":
    //   return <img className="icon" src={Sun} alt={Sun}></img>;
    //   break;
    default:
      return <React.Fragment>
      <img className="icon" src={Thermameter} alt={Thermameter}></img>;
        <h5>{props.description}</h5>
      </React.Fragment>
  }
};
export default Icon;
