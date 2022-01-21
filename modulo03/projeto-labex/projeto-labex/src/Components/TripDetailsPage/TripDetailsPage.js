import { useHistory, useParams } from 'react-router';
import { Control, TripDetail, CandidateDetail, ChoosePerson} from '../../API/Functions';
import CardTripDetail from './CardTripDetail';
import Header from '../Header/Header'
import * as Styled from '../../StyledComponents/StyledComponents'
import AdminMenu from '../AdminMenu/AdminMenu';

function TripDetailPage() {

  const history = useHistory()

  const control = () => {
    Control(history)
  }

  const DetailsAndCandidates = () => {
    const {id} = useParams()
    const trip = TripDetail(id, history)
    const person = CandidateDetail(id,history)
    const choosePerson = (candidateId, escolha) => {
      ChoosePerson(id, candidateId, escolha)
    }
    
    return (
      <div>
        <CardTripDetail
        trip = {trip}
        person = {person}
        choose = {choosePerson}
       
        />
        
      </div>

    )
  }

  const DeleteTrip = () => {
    const {id} = useParams()
    DeleteTrip(id)
  }

  return (
    <Styled.BaseDisplay>
      {control()}
      <Header/>
      <Styled.AdminPageDisplay>
        <AdminMenu/>
        <Styled.DetailDisplay>
          {DetailsAndCandidates()}
        </Styled.DetailDisplay>
      </Styled.AdminPageDisplay>
      
    </Styled.BaseDisplay>
  );
}

export default TripDetailPage;
