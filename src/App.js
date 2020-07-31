import React from 'react';
import Windows from './Components/Windows/Windows';
import Header from './Components/Header';
import AlertList from './Components/Alert';

const App = () => {
  return (
    <div className="mainContainer">
      <Header />
      <AlertList />
      <Windows/>
    </div>
  );
}

export default App;
