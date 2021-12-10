import react from 'react';
import {useHistory} from 'react-router-dom';
import tripsList from  '../ApplicationFormPage/ApplicationFormPage'

function ApplicationFormPage() {

  //----Function ChangePage----
  const history = useHistory()

  const goBackPage = () => {
    history.goBack()
  };
  
  //----Function Api----

  return (
    <div>
      <h1>ApplicationFormPage</h1>

      <button onClick={goBackPage}>Back</button>
    </div>
  );
}

export default ApplicationFormPage;
