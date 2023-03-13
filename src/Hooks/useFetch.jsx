import { useState } from "react";
import { handleFetch } from "../utils/fetch";

export function useFetch(param) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const requestApi = async () => {
    const apiResult = await handleFetch(param);
    console.log(apiResult)
    setData(apiResult);
    setLoading(false);
  }

  return { loading, data, requestApi };
}