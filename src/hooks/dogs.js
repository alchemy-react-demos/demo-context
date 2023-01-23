import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDogs } from '../services/fetchDogs';

export function useDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return dogs;
}
