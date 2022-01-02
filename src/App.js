//DATA section
import Event from './components/Event';
import EditEvent from './components/EditEvent';
import CreateEvent from './components/CreateEvent';
import Events from './components/Events';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>I am the app component! It's empty, just like my creator :=( </h1>
      <Login />
      <Event />
      <EditEvent />
      <CreateEvent />
      <Events />
    </div>
  );
}

export default App;
