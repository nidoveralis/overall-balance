const lineBalance = document.getElementById('overall-balance');
lineBalance.textContent = 'aaaaaaaa';
class Api {
  constructor() {
    this._baseUrl = 'http://localhost:8000/overall_balance_get';
    this._headers = {
      'Content-Type': 'application/json'
    };
  }


  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  };

  getBalance() {
    return fetch(this._baseUrl, {
      headers: this._headers
    });
  };
};

const api = new Api();

api.getBalance().then(data => console.log(data));
