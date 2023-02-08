import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import TopFavorite from './components/TopFavorite/TopFavorite';
import Garden from './components/Garden/Garden';
import BestFood from './components/BestFood/BestFood';
import Fruits from './components/Fruits/Fruits';


function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSlider />
      <TopFavorite />
      <Fruits/>
      <BestFood/>
      <Garden/>
    </div>
  )

}

export default App;
