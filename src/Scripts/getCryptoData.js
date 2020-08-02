import { updateCryptoInfos, changeDefaultCurrency } from '../Actions'
import coin from '../API/coin';

const getCryptoData = async (dispatch) => {
    const response = await coin.get();
    const cryptos = response.data.filter(elt => elt.type_is_crypto === 1 && elt.price_usd !== undefined);

    cryptos.sort(function (a, b) {
      if (a.asset_id < b.asset_id)
        return -1;
      if (a.asset_id > b.asset_id)
        return 1;
      return 0;
    });
    dispatch(updateCryptoInfos(cryptos));
    dispatch(changeDefaultCurrency(cryptos[0].asset_id));
    console.log(cryptos[0].asset_id);
  }

  export default getCryptoData;