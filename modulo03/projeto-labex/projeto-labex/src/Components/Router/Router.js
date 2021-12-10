import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminHomePage from '../AdminHomePage/AdminHomePage';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';
import CreateTripPage from '../CreateTripPage/CreateTripPage';
import HomePage from '../HomePage/HomePage';
import ListTripPage from '../ListTripsPage/ListTripsPage';
import TripDetailPage from '../TripDetailsPage/TripDetailsPage';

function Router() {
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
  
  export default Router;
  