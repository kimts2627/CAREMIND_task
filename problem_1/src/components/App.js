import React, { useState } from 'react';
import Header from './Header';
import MainPage from './MainPage';
import '../style.css';

const App = () => {

  const [fontSize, setFontSize] = useState(16);

  return (
    <div className="App">
      <Header />
      <MainPage fontSize={fontSize} setFontSize={setFontSize} />
    </div>
  );
}

export default App;
