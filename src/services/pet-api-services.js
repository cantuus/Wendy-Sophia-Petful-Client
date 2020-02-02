import config from "../config";

const PetApiService = {
  reloadCats() {
    return fetch(`${config.API_ENDPOINT}/cats/reload`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return {};
        } else {
          return res.json().then(event => Promise.reject(event))
        }
      })
  },
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(res => {
        if (res.ok) {
          return {};
        } else {
          return res.json().then(event => Promise.reject(event))
        }
      })
  },

};

export default PetApiService;
