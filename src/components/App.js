import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      {/* First Container */}
      <Container header="Example header" direction="horizontal">
        <div>This is an example!</div>
        {/* ... more div elements */}
      </Container>

      {/* Second Container */}
      <Container
        header="Example header"
        direction="horizontal"
        textPosition="right"
      >
        <section direction="vertical">
          <div>This is an example!</div>
          {/* ... more div elements */}
        </section>
      </Container>

      {/* Third Container */}
      <Container header="Example header" textPosition="center">
        {/* ... images go here */}
      </Container>

      {/* Fourth Container */}
      <Container header="Example header" textPosition="left">
        {/* ... images go here */}
      </Container>
    </div>
  );
}

export default App;

