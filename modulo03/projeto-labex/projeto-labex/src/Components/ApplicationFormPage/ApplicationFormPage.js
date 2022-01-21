import react from 'react';
import {useHistory} from 'react-router-dom';

function ApplicationFormPage() {

  const history = useHistory();

  const goBackPage = () => {
    history.goBack()
  };

  return (
    <div>
      <h1>ApplicationFormPage</h1>

      <button onClick={goBackPage}>Back</button>
    </div>
  );
}

export default ApplicationFormPage;
