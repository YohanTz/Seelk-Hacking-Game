import axios from 'axios';

export default axios.create({
    baseURL: "https://rest.coinapi.io/v1/assets",
    headers: {
        Authorization: 'X-CoinAPI-Key: FB8608F1-B2E6-48F0-900C-E1AC308C11B2'
    }
});