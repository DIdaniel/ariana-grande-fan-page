import React from "react";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import "./resources/styles.css";
import VenueNfo from "./components/venueNfo";
import HighLights from "./components/highlights";

function App() {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
      </>
      <>
        <VenueNfo />
      </>
      <>
        <HighLights />
      </>

      <div style={{ background: "red", height: "800px" }}></div>
      <div style={{ background: "blue", height: "800px" }}></div>
      <div style={{ background: "green", height: "800px" }}></div>
      <div style={{ background: "black", height: "800px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
