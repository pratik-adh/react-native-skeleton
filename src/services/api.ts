import axios from 'axios';

axios.defaults.baseURL = 'paste-ypur-base-url-here';

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.responseType = 'json';

const API = axios.create();

API.interceptors.request.use(
  async (axiosConfig) => {
    const token = 'paste-your-token-here';
    if (token) {
      axiosConfig.headers.Authorization = 'Basic ' + token;
    }

    return axiosConfig;
  },
  (error) => Promise.reject(error),
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (err) =>
    Promise.reject({
      message: err?.response?.data?.error || err.message || err.message.message,
    }),
);

export { API };
