import config from "../config";

const PetApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return {};
      } else {
        return res.json().then(event => Promise.reject(event));
      }
    });
  },
  displayCats() {
    return fetch(`${config.API_ENDPOINT}/cats/allcats`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  reloadCats() {
    return fetch(`${config.API_ENDPOINT}/cats/morecats`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  deleteDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return {};
      } else {
        return res.json().then(event => Promise.reject(event));
      }
    });
  },
  displayDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs/alldogs`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  reloadDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs/moredogs`).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

};

export default PetApiService;
