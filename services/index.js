import axios from 'axios';
import accountDataMock from '../assets/mocks/accountData.json';
const API_URL = '';

function headers({ token }) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

const createInstance = (params) =>
  axios.create({
    baseURL: params.baseURL || `${API_URL}`,
    headers: headers(params.headers || {}),
    timeout: 10000,
  });

class APIService {
  static getAccountData() {
    return {
      success: true,
      result: accountDataMock,
      error: null,
    }
    // return createInstance({}).get('/v1/account/data');
  }
}

export default APIService;
