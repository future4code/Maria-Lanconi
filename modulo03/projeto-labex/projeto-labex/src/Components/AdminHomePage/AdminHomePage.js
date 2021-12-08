import react from 'react';
import {useHistory} from 'react-router-dom';

function AdminHomePage() {

  const history = useHistory()

  const goToCreatePage = () => {
    history.push('/admin/trips/create')
  }

  const goToTripDetailPage = () => {
    history.push('/admin/trips/:id')
  }

  const goBackPage = () => {
    history.goBack()
  };

  return (
    <div >
      <h1>AdminHomePage</h1>
      <button onClick={goToCreatePage}>Nova Viagem</button>
      <button onClick={goToTripDetailPage}>Detalhes</button>
      <button onClick={goBackPage}>Back</button>
    </div>
  );
}

export default AdminHomePage;
