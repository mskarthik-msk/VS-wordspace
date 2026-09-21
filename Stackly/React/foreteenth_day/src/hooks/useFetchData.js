import { useState, useEffect } from 'react';
import axios from 'axios';

// Helper function to pause execution
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useFetchData = (url, delay = 4000) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(url, { signal: controller.signal });
        
        // Await the delay duration before showing data
        await sleep(delay);

        setData(response.data);
      } catch (err) {
        if (axios.isCancel(err) || err.name === 'CanceledError') return;
        await sleep(delay);
        setError(err.message || 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }

    return () => {
      controller.abort();
    };
  }, [url, delay]);

  return { data, loading, error };
};

export default useFetchData;