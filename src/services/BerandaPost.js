import axios from "axios";

export async function getDataPost() {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  const axiosResponse = response.data;
  return axiosResponse;
}

export async function getDataUserDetail(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const axiosResponse = response.data;
  return axiosResponse;
}
