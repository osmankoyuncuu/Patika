import axios from "axios";
import fetch from "node-fetch";
async function getData(number) {
  const url = `https://jsonplaceholder.typicode.com/users/${number}`;
  const urlPost = `https://jsonplaceholder.typicode.com/posts?id=${number}`;
  const { data: user } = await axios(url);
  const data = await fetch(urlPost)
    .then((res) => res.json())
    .then((data) => data);
  user.posts = data;
  console.log(user);
}
getData(1);

export default getData;
