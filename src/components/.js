import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

// Function to handle rendering errors
const handleRenderError = (error) => {
  console.error("Error while rendering:", error);
  // You can implement additional error handling logic here
};

// Render the root component into the root HTML element
ReactDOM.render(<App />, document.getElementById("root"), handleRenderError);
