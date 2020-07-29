import React from 'react';
import Intro from './Components/Intro';
import Header from './Components/Header';
import AlertList from './Components/AlertList';

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <AlertList />
      <Intro />
    </div>
  );
}

export default App;
