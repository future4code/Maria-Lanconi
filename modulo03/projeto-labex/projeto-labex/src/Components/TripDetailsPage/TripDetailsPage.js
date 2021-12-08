import react from 'react'
import { useHistory } from 'react-router';

function TripDetailPage() {

  const history = useHistory()

  const goBackPage = () => {
    history.goBack()
  };

  return (
    <div >
      <h1>TripDetailPage</h1>
      <button onClick={goBackPage}>Back</button>
    </div>
  );
}

export default TripDetailPage;
