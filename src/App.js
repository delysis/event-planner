//DATA section
import Events from './components/Events';


import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>I am the app component! </h1>

        <Link to='/events'>View Calendar HERE!</Link>
          
       <Route path='/events'>
       <Events />
        </Route>

    </div>
  );
}

export default App;
