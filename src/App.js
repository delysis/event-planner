//DATA section
import Event from './components/Event';
import EditEvent from './components/EditEvent';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Login from './components/Login';

import {Route, Link} from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <h1>I am the app component! It's empty, just like my creator :=( </h1>

        <Link to='/login'>Click on ME to log IN!</Link>
          <br></br>
        <Link to='/events'>Click on ME to view EVENTS!</Link>

        <Route path='/login'>
        <Login />
        </Route>

       <Route path='/events'>
       <Events />
        </Route>

      <Route path='/event'>
      <Event />
      </Route>

 
      
      <CreateEvent />
     
    </div>
  );
}

export default App;
// {  props.showEdit && <EditEvent />}
