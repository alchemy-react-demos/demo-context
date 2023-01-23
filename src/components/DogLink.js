import { Link } from 'react-router-dom';

export default function DogLink({ dog }) {
  return (
    <div>
      {/* <img src={dog.image} /> */}
      <Link to={`/dogs/${dog.id}`}>{dog.name} </Link>
    </div>
  );
}
