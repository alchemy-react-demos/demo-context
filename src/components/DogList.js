import { Link } from 'react-router-dom';
import { useDogs } from '../hooks/dogs';
import DogLink from './DogLink';

export default function DogList() {
  const dogs = useDogs();
  return (
    <>
      <h1>Dog List</h1>
      <Link to="/">Go Home</Link>
      {dogs.map((dog) => (
        <DogLink key={dog.id} dog={dog} />
      ))}
    </>
  );
}
