import React, { Component } from "react";

import Add from "../images/add.svg";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="button-wrapper" style={{marginBottom:`0.7em`}}>
        <button
          className="button"
          style={{ backgroundColor: `#361d32`, border: `none` }}
        >
          <img src={Add} alt="add-button" onClick={()=>alert('Clicked')} style={{ width: `35px` }}></img>
        </button>
      </div>
    );
  }
}

export default Button;
