import axios from "axios";
import useSWR from "swr";

export const apiAxios = axios.create({
  baseURL: "https://www.reddit.com",
});

const Fetcher = async (url) => {
  const response = await apiAxios.get(url);
  const data = response;

  return data;
};

export function useApi(url) {
  const { data, error } = useSWR(url, Fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  return { data, error };
}
