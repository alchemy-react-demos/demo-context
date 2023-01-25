import { Link } from 'react-router-dom';
import { useDogs } from '../hooks/dogs';
import Dog from './Dog';
import './DogList.css';
export default function DogList() {
  const { dogs, error } = useDogs();
  return (
    <>
      <h1>Dog List</h1>
      <Link to="/">Go Home</Link>
      {error && <p className="error"> ⚠️ {error} ⚠️ </p>}
      {!error && (
        <>
          <div className="dog-list">
            {dogs.map((dog) => (
              <Dog key={dog.id} dog={dog} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
