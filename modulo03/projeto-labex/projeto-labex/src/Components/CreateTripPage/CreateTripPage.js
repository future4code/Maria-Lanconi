import useForm from '../../UseForm/UseForm';
import {useHistory} from 'react-router-dom';
import * as Styled from '../../StyledComponents/StyledComponents';
import Header from '../Header/Header';
import AdminMenu from '../AdminMenu/AdminMenu';
import { CreateTrip, Control } from '../../API/Functions';

function CreateTripPage() {

   const history = useHistory()
   
  //----Function General----

  const { form, onChange, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: ''});

  const create = (e) => {
    CreateTrip(form)
    e.preventDefault()
    cleanFields()
    
  }
  
  return (
    <Styled.BaseDisplay>
      {Control()}
      <Header/>

      <Styled.AdminPageDisplay>
        <AdminMenu/>

          <Styled.CreateTripDisplay>
            <Styled.FormDisplay onSubmit={create}>
              <h1>Cria uma nova Viagem</h1>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder={"Nome"}
                required
                type="text"
              />
              <input
                name="planet"
                value={form.planet}
                onChange={onChange}
                placeholder={"Planeta"}
                required
                type="text"
              />
              <input
                name="date"
                value={form.date}
                onChange={onChange}
                placeholder={"Data"}
                required
                type="date"
              />
              <input
                name="description"
                value={form.description}
                onChange={onChange}
                placeholder={"Descrição"}
                required
                type="text"
              />
              <input
                name="durationInDays"
                value={form.durationInDays}
                onChange={onChange}
                placeholder={"Duração"}
                required
                type="number"
              />

              <Styled.ButtonDisplay>
                <button>Criar</button>
              </Styled.ButtonDisplay>
            </Styled.FormDisplay>
        </Styled.CreateTripDisplay>
      </Styled.AdminPageDisplay>
    </Styled.BaseDisplay>
  );
}

export default CreateTripPage;
