import { Link } from 'react-router-dom';
import './DogLink.css';

export default function DogLink({ dog }) {
  return (
    <Link to={`/dogs/${dog.id}`} className="dog-link">
      <div className="image">
        <img src={dog.image} />
      </div>
      <div className="content">{dog.name}</div>
    </Link>
  );
}
