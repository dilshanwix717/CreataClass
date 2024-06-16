import React from "react";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";

import Mastery from "./Components/Mastery";
import Solutions from "./Components/Solutions";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Mastery />
      <Solutions />
      <Footer />
    </div>
  );
}

export default Home;
