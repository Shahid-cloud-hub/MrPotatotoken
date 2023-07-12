import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const headers = {
      accept: "application/json",
    };

    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(url, { headers });
        if (response.ok) {
          const data = await response.json();
          setData(data);
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

  return { data, loading, error };
}

export default useFetch;
