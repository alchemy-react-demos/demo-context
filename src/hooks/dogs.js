import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDogDetail, fetchDogs } from '../services/fetchDogs';
import { useHistory } from 'react-router-dom';

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

export function useDogDetail(id) {
  const [dog, setDog] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogDetail(id);
        setDog(data);
      } catch {
        history.push('/dogs');
      }
    };
    fetchData();
  }, [id, history]);
  return dog;
}
