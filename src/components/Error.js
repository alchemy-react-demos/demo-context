import { useContext } from 'react';
import { ErrorContext } from '../context/ErrorContext';

export default function Error() {
  const { error } = useContext(ErrorContext);
  return <div>{error && <p className="error"> ⚠️ {error} ⚠️ </p>}</div>;
}
