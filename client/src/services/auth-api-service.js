import axios from 'axios';

const endpoint = 'http://localhost:8000/api';
//TODO: throw proper error
const AuthApiService = {
  postUser(data) {
    return axios
      .post(`${endpoint}/users`, { ...data })
      .then(res => res)
      .catch(err => err.response);
  },
  loginUser(data) {
    return axios
      .post(`${endpoint}/auth`, { ...data })
      .then(res => res)
      .catch(err => err.response);
  }
};

export default AuthApiService;
