import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminHomePage from './Components/AdminHomePage/AdminHomePage';
import ApplicationFormPage from './Components/ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from './Components/CreateTripPage/CreateTripPage';
import HomePage from './Components/HomePage/HomePage';
import ListTripPage from './Components/ListTripsPage/ListTripsPage';
import TripDetailPage from './Components/TripDetailsPage/TripDetailsPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/'>
          <HomePage/>
        </Route>

        <Route exact path = '/trips/list'>
          <ListTripPage/>
        </Route>

        <Route exact path = '/trips/application'>
          <ApplicationFormPage/>
        </Route>

        <Route exact path = '/admin/trips/list'>
          <AdminHomePage/>
        </Route>

        <Route exact path = '/admin/trips/create'>
        < CreateTripPage/>
        </Route>

        <Route exact path = '/admin/trips/:id'>
          <TripDetailPage/>
        </Route>

      </Switch>

    </BrowserRouter>
   
  );
}

export default App;
