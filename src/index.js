//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let customStyle = {
  color: "black"
};
/** returns a string with the greeting according to the date.hour  */
function greeting() {
  let date = new Date().getHours();

  if (date >= 0 && date < 12) {
    return "Good morning";
  } else if (date >= 12 && date < 18) {
    return "Good afternoon";
  } else if (date >= 18 && date < 0) {
    return "Good evening";
  }
}

/** takes and object and attempts to change it color */
function changeDayColor(object) {
  let date = new Date().getHours();

  if (date >= 0 && date < 12) {
    object.color = "red";
  } else if (date >= 12 && date < 18) {
    object.color = "green";
  } else if (date >= 18 && date < 0) {
    object.color = "Blue";
  }
}

let result = greeting();
changeDayColor(customStyle);

ReactDOM.render(
  <div>
    <h1 style={customStyle}>{result}</h1>
  </div>,
  document.getElementById("root")
);
