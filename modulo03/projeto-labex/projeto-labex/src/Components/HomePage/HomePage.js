import react from 'react';
import {useHistory} from 'react-router-dom';

function HomePage() {
  
  const history = useHistory();

  const goToTripPage = () => {
    history.push('/trips/list')
  }

  const goToAdminHomePage = () => {
    history.push('/admin/trips/list')
  }

  return (
    <div >
      <h1>HomePage</h1>

      <button onClick={goToTripPage}>Trip Page</button>
      <button onClick={goToAdminHomePage}>Admin Page</button>
    </div>
  );
}

export default HomePage;
