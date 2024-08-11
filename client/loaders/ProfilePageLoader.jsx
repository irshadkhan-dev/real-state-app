import axios from "axios";
import { defer } from "react-router-dom";

export const profilePageLoader = async () => {
  const postPromise = axios.get("http://localhost:3002/api/user/profilePost", {
    withCredentials: true,
  });
  return defer({
    postResponse: postPromise,
  });
};
