import { Link, useParams } from 'react-router-dom';
import { useDogDetail } from '../hooks/dogs';

export default function DogDetail() {
  const { id } = useParams();
  const { name, image, breed, bio } = useDogDetail(id);
  console.log(name);
  return (
    <>
      <h1>{name}</h1>
      <img src={image} />
      <p>{breed}</p>
      <p>{bio}</p>
      <Link to="/dogs">Back</Link>
    </>
  );
}
