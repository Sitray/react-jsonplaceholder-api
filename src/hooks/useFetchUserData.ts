import { useEffect, useState } from 'react';
import getUserData from '../helpers/getUserData';
import { User } from '../interfaces';

const useFetchUserData = () => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    try {
      getUserData().then(setData);
      setLoading(false);
    } catch (er) {
      setError(true);
    }
  }, []);

  return { data, loading, error };
};

export default useFetchUserData;
