import axios from "axios";
import useSWR from "swr";

export const apiAxios = axios.create({ baseURL: "https://www.reddit.com" });

const Fetcher = async (url) => {
  let data = {};

  try {
    const response = await apiAxios.get(url);
  
    data = response;
  } catch (error) {
    console.error(error);
  }

  return data;
};

export function useApi(url) {
  const { data, error } = useSWR(url, Fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  return { data, error };
}
