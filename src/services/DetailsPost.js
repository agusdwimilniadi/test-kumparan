import axios from "axios";

export async function getDataDetailPost(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const axiosResponse = response.data;
  return axiosResponse;
}

export async function getComments(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const axiosResponse = response.data;
  return axiosResponse;
}
