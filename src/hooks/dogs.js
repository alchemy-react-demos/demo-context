import { useEffect } from 'react';
import { useState } from 'react';
import { fetchDogDetail, fetchDogs } from '../services/fetchDogs';
import { useHistory } from 'react-router-dom';

export function useDogs() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogs();
        setDogs(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return { error, dogs };
}

export function useDogDetail(id) {
  const [dog, setDog] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogDetail(id);
        setDog(data);
      } catch (e) {
        setError(e.message);
        history.push('/dogs');
      }
    };
    fetchData();
  }, [id, history]);
  return { dog, error };
}
