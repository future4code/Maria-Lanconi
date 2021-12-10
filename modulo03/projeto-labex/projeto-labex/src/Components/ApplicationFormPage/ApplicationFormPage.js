import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import useForm from '../../UseForm/UseForm';
import {TripList, Application} from '../../API/Functions';
import { Countries } from '../../Countries/Contries';
import * as Styled from '../../StyledComponents/StyledComponents'
import Header from '../Header/Header';


function ApplicationFormPage() {

  //----Function ChangePage----
  const history = useHistory()

  const goBackPage = () => {
    history.goBack()
  };
  
  //----Function General----

  const [id, setId] = useState('')
  const { form, onChange, cleanFields } = useForm({ name: '', age: '', applicationText: '', profession: '', country: ''});
  
  const trips = TripList()
      
  return (
    <Styled.BaseDisplay>
      <Header/>    
      <Styled.ContentDisplay>
        <Styled.FormDisplay onSubmit={() => {Application(form, id)}}>
          <select name="trips">
            <option value="" selected>Escolha uma Viagem</option>
            {trips.map((trip) => {
              return <option key={trip.id} value={trip.id}>{trip.name}</option>
            })} 
          </select>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
            type="text"
          />
          <input
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type="number"
            min={18}
          />
          <input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de Aplicação"}
            required
            type="text"
          />
          <input
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            type="text"
          />
          <Countries
            onChange= {onChange}
          />

          <Styled.ButtonDisplay>
            <button onClick={goBackPage}>Voltar</button>
            <button type='submit'>Cadastre-se</button> 
          </Styled.ButtonDisplay>

        </Styled.FormDisplay>

      </Styled.ContentDisplay>
    </Styled.BaseDisplay>
  );
}

export default ApplicationFormPage;
