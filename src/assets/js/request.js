import axios from "axios";
const Service = axios.create({
  timeout: 6000,
  // process.env.NODE_ENV
  //   baseURL: ,
  //   method: "post",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

Service.interceptors.request.use((config) => {
  return config;
});

Service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function getRequest({ url, params = {} }) {
  return new Promise((resolve, reject) => {
    Service.get(url, {
      params,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { getRequest };
