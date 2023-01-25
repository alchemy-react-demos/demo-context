import { useParams } from 'react-router-dom';
import { useDogDetail } from '../hooks/dogs';
import Dog from './Dog';
export default function DogDetail() {
  const { id } = useParams();
  const dog = useDogDetail(id);
  return (
    <div className="dog-detail-container">
      <Dog dog={dog} age={7} name="Benny" showDetail />
    </div>
  );
}
