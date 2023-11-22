import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container
        header="Example header"
        direction="horizontal"
        textPosition="right"
      >
        <section direction="vertical">
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
          <div>This is an example!</div>
        </section>
      </Container>
      <Container header="Example header" textPosition="left">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
  <section></section>;
}

export default App;
