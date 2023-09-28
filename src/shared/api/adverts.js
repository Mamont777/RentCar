import { instance } from '../api';

export const getAllAdverts = async () => {
  try {
    const { data } = await instance.get('/');
    return data;
  } catch ({ response }) {
    console.log(response.data);
  }
};
