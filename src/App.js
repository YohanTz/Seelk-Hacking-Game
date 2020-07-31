import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Windows from './Components/Windows/Windows';
import Header from './Components/Header';
import Alert from './Components/Alert';
import getCryptoData from './Scripts/getCryptoData';

const App = () => {
  const alerts = useSelector(state => state.alert);
  const cryptos = useSelector(state => state.crypto);
  const dispatch = useDispatch();

  useEffect(() => {
    getCryptoData(dispatch).catch(error => console.log('Error: ', error));
        const interval = setInterval(() => {
            getCryptoData(dispatch).catch(error => console.log('Error: ', error));
        }, 60000);
        return () => clearInterval(interval);
  }, []);

  return (
    <div className="mainContainer">
      <Header />
      <Alert />
      <Windows />
    </div>
  );
}

export default App;
