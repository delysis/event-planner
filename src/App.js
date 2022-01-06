//DATA section
import Event from './components/Event';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';

import {Route, Link} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <h1>I am the app component! </h1>
       
       <nav className='navbar'>
       <Link to='/events'>View Events</Link>
          <br></br>
        <Link to='/create-event'>Host an Event</Link>
        <br></br>
        <Link to='/'>Take me HOME!</Link>
       </nav>
        
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
