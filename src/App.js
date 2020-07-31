import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoInfos } from './Actions'
import Windows from './Components/Windows/Windows';
import Header from './Components/Header';
import AlertList from './Components/Alert';
import coin from './API/coin';


const App = () => {
  const dispatch = useDispatch();

  const getCryptoData = async () => {
    console.log('API Call!');
    const response = await coin.get();
    const cryptos = response.data.filter(elt => elt.type_is_crypto === 1 && elt.price_usd !== undefined);

    cryptos.sort(function (a, b) {
      if (a.asset_id < b.asset_id)
        return -1;
      if (a.asset_id > b.asset_id)
        return 1;
      return 0;
    });
    console.log(cryptos);
    dispatch(updateCryptoInfos(cryptos));
  }

  useEffect(() => {
    getCryptoData().catch(error => console.log('Error: ', error));
  }, []);

  return (
    <div className="mainContainer">
      <Header />
      <AlertList />
      <Windows />
    </div>
  );
}

export default App;
