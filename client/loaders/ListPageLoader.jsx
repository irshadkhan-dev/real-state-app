import axios from "axios";
import { defer } from "react-router-dom";

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split("?")[1];
  console.log(query);

  const postPromise = axios.get(`http://localhost:3002/api/post?${query}`);

  return defer({
    postResponse: postPromise,
  });
};
