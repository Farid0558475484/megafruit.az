import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HeaderSlider from "./components/HeaderSlider/HeaderSlider";
import TopFavorite from "./components/TopFavorite/TopFavorite";
import Garden from "./components/Garden/Garden";
import BestFood from "./components/BestFood/BestFood";
import Fruits from "./components/Fruits/Fruits";
// import SweetFruit from "./components/SweetFruit/SweetFruit";
import Video2 from "./components/Video2/Video2";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSlider />
      <TopFavorite />
      <Fruits />
      <Video2/>
      <BestFood />
      <Garden />
      <Footer/>
      {/* <SweetFruit /> */}
    </div>
  );
}

export default App;
