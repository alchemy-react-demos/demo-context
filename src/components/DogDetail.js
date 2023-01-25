import { useParams } from 'react-router-dom';
import { useDogDetail } from '../hooks/dogs';
import Dog from './Dog';
export default function DogDetail() {
  const { id } = useParams();
  const { dog, error } = useDogDetail(id);
  return (
    <div className="dog-detail-container">
      {error && <p className="error"> ⚠️ {error} ⚠️ </p>}
      {!error && <Dog dog={dog} age={7} name="Benny" showDetail />}
    </div>
  );
}
