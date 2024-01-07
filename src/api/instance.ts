import axios from "axios";

const baseURL = process.browser
  ? process.env.NEXT_PUBLIC_HOST
  : process.env.HOST;
export const client = axios.create({ baseURL });

export const getAuthorisationHeader = () => {
  const jwtToken = document.cookie;
  return {
    headers: { Authorization: `Bearer ${jwtToken}` },
  };
};
