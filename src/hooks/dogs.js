import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { fetchDogDetail, fetchDogs } from '../services/fetchDogs';
import { useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';

export function useDogs() {
  const [dogs, setDogs] = useState([]);
  // const [error, setError] = useState(null);
  const { setError } = useContext(ErrorContext);

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
  }, [setError]);

  return { dogs };
}

export function useDogDetail(id) {
  const [dog, setDog] = useState({});
  // const [error, setError] = useState(null);
  const { setError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDogDetail(id);
        setDog(data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id, setError]);
  return { dog };
}
