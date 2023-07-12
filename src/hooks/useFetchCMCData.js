import { useState, useEffect } from "react";
import axios from "axios";

function useFetchCMCData(url) {
  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      Accept: "application/json",
    };
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get(url, { headers });
        if (response) {
          setGetData(response?.data?.data);
          setError(null);
        } else {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]); // refetch when url changes

  return { getData, loading, error };
}

export default useFetchCMCData;
