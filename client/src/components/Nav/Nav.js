import React from "react";

const Nav = () => (
  <div
    style={{
      height: 200,
      clear: "both",
      paddingTop: 40,
      textAlign: "center",
      borderBottom: "1px solid black"
    }}
    className="jumbotron"
  >
    <h1 style={{ fontFamily: "UnifrakturCook, cursive" }}>
      <u>New York Times Article Scrubber</u>
    </h1>
    <p>Search for and annotate articles of interest!</p>
  </div>
);

export default Nav;
