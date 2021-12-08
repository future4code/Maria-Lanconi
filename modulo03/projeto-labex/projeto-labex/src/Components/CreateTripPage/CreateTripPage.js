import react from 'react'
import { useHistory } from 'react-router';

function CreateTripPage() {

  const history = useHistory()

  const goBackPage = () => {
    history.goBack()
  };

  return (
    <div >
      <h1>CreateTripPage</h1>
      <button onClick={goBackPage}>Back</button>
    </div>
  );
}

export default CreateTripPage;
