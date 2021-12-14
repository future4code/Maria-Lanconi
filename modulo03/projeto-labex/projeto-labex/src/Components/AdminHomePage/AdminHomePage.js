import {useHistory} from 'react-router-dom';
import {Control, TripList, DeleteTrip} from '../../API/Functions';
import Header from '../Header/Header';
import AdminMenu from '../AdminMenu/AdminMenu';
import * as Styled from '../../StyledComponents/StyledComponents';
import CardTripAdmin from './CardTripAdmin';
import { useState } from 'react';

function AdminHomePage() {

  //----Function Page Change----
  const history = useHistory()

  //----Function General----
  const [id, setTripId] = useState('')

  const changeTripId = (id) => {
    history.push(`/admin/trips/${id}`) 
    setTripId(id)
  }

  const control = () => {
    Control(history)
  }

  const deleteTrip = () =>{
    DeleteTrip(id)
  }
  
  const list = () => {
    const trip = TripList()

    return (
      <Styled.TripPageDisplay>
        {trip.map(trips => {
          return <CardTripAdmin
            name = {trips.name}
            description ={trips.description}
            planet = {trips.planet}
            duration = {trips.durationInDays}
            date = {trips.date}
            id = {trips.id}
            details = {changeTripId}
            delTrip = ''
            />
        })}
        
      </Styled.TripPageDisplay>
    )
  }

  return (
    <Styled.BaseDisplay>
      {control()}
      <Header/>
      <Styled.AdminPageDisplay>
        <AdminMenu/>
        {list()}
        
      </Styled.AdminPageDisplay>
    </Styled.BaseDisplay>
  );
}

export default AdminHomePage;
