//DATA section
import Event from './components/Event';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Login from './components/Login';

import {Route, Link} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <h1>I am the app component! </h1>

        <Link to='/login'>Log in</Link>
          <br></br>
        <Link to='/events'>View Events</Link>
          <br></br>
        <Link to='/create-event'>Host an Event</Link>

        <Route path='/login'>
        <Login />
        </Route>

       <Route path='/events'>
       <Events />
        </Route>

      <Route path='/event'>
      <Event />
      </Route>

 
      <Route path='/create-event'>
      <CreateEvent />
      </Route>
      
     
    </div>
  );
}

export default App;
// {  props.showEdit && <EditEvent />}
