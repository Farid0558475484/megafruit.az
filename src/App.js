import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeaderSlider from './components/HeaderSlider/HeaderSlider';
import TopFavorite from './components/TopFavorite/TopFavorite';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSlider />
      <TopFavorite />
    </div>
  )

}

export default App;
