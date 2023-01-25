import { Link } from 'react-router-dom';
import './Dog.css';

export default function Dog({ dog, showDetail }) {
  const classes = showDetail ? 'dog-detail' : 'dog-detail compact';
  return (
    <div className={classes}>
      <div className="image" style={{ backgroundImage: `url(${dog.image})` }}>
        {' '}
      </div>
      {!showDetail && (
        <Link to={`/dogs/${dog.id}`}>
          <div className="content">
            <p className="title">{dog.name}</p>
          </div>
        </Link>
      )}
      {showDetail && (
        <div className="content">
          <p className="title">{dog.name}</p>
          <p>
            {dog.breed} &bull; {dog.age} &bull; {dog.bio}{' '}
          </p>
          <Link to="/dogs">Back to Dogs</Link>
        </div>
      )}
    </div>
  );
}
