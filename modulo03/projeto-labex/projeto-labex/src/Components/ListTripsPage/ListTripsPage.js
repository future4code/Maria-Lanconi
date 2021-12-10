import {useHistory} from 'react-router-dom';
import * as Styled from '../../StyledComponents/StyledComponents'
import Header from '../Header/Header';
import CardTrip from './CardTrip';
import {TripList} from '../../API/Functions';


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
  
  const list = () => {
    const trip = TripList()

    return (
      <Styled.TripPageDisplay>
        {trip.map(trips => {
          return <CardTrip
            name = {trips.name}
            description ={trips.description}
            planet = {trips.planet}
            duration = {trips.durationInDays}
            date = {trips.date}
          />
        })}
        
      </Styled.TripPageDisplay>
    )
  }

  return (
    <Styled.BaseDisplay>
      <Header/>

      <Styled.ContentDisplay>
            {list()}

          <Styled.ButtonDisplay>
            <button onClick={goBackPage}>Back</button>
            <button onClick={goToApplicationForm}>Inscreva-se</button>
          </Styled.ButtonDisplay>

      </Styled.ContentDisplay>
      
    </Styled.BaseDisplay>
  );
}

export default ListTripPage;
