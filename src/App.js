//DATA SECTION
import React, {useState} from 'react';
import CreateEvent from './components/CreateEvent';
import axios from 'axios';
import {BASE_URL} from './components/utils/baseUrl';

const eventDefault={
  location: '',
  date: '',
  time: '',
}

//LOGIC section
function App() {

  //as always, DATA sectionr::
  const [event,setEvent] = useState(eventDefault);

  //LOGIC SECTIONR

  const doSubmit = () => {
    //AXIOS! (Sounds like a dang harry potter spell lol)
  axios.post(BASE_URL,event) //I need a working endpoitn of course...
    .then(res=>{
     setEvent(res.data)
    }).catch(err=>{
      console.error(err);
    })
    .finally(()=>{setEvent(eventDefault)})
}

const doChange = (name,value) => {
  // validate(name,value); //NEEDFUL:: CREATE VALIDATION W YUP
  setEvent({...event,[name]:value})
}

  return (
    <div className="App">
        <div className='events-list'>   
           <iframe title='caltitle' id='calendar-styles' src="https://calendar.google.com/calendar/embed?src=hdo5309tq5gop0pul9hcn07isc%40group.calendar.google.com&ctz=America%2FDenver" ></iframe>

           {/* <Link to='/event'>Click ME to see a single EVENT!</Link> */}
       </div>
       <CreateEvent submit={doSubmit} change={doChange} values={event}/>
    </div>
  );
}

export default App;
