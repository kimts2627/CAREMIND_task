import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import '../style.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
