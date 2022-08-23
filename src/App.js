import React from "react";
import Avatar from "./components/Avatar";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="card">
      <div className="card-content">
        <Avatar />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
