import react, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import {baseUrl} from '../../API/APIFunctions';
import axios from 'axios';

function ListTripPage() {

  //----Function ChangePage----
  const history = useHistory()

  const goBackPage = () => {
    history.goBack()
  };

  const goToApplicationForm = () => {
    history.push('/trips/application')
  };

  //----Function API----
  
  const [trips, setTripsValue] = useState([])

  useEffect(() => {

     axios.get(`${baseUrl}/trips`)
      .then (res => {
       setTripsValue(res.data.trips)
      })
      .catch ( error => {
        console.log(error)
      })
  }, [])

  const tripList = trips.map( trip => {
    return <div>
      {trip.name}
    </div>
  })
 
  
  return (
    <div >
      <h1>ListTripPage</h1>
      {tripList}
      <button onClick={goBackPage}>Back</button>
      <button onClick={goToApplicationForm}>Inscever-se</button>
    </div>
  );
}

export default ListTripPage;
