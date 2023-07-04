import axios from './axios';

export function test() {
  return axios.post('./test', {
    data: {
      name: 1,
    },
  });
}
