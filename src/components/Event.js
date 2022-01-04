//this is the singular EVENT component
//this will render a single event when viewed!
//
//EVENT needful: list of attendees, (obj with different things like name, location, skill?), 
//              location of event (LOGIC of locationr lives in Map.js; this is just display of that location)
//              datetime of event
//              CREATE event lives in CreateEvent.js !
//              ALSO : User will be able to (on login success) mark 'attending'

//DATA section
import React, {useState,useEffect} from 'react';
import EditEvent from './EditEvent';

//LOGIC section

// useEffect(() => {
    // axiosWithAuth()
    // .get(`/endpoint/${eventId}`)
    // .then(res=>{
        
    //     setEvent(res); 
    // }).catch(err=>{
    //     console.error(err);
    // })
// },[]); //'on first mount, do this'

 const Event=(props)=>{
     //DATA section
    const [showEdit,setShowEdit] = useState(false);
     //LOGIC section
     const showEditSettr=(event)=>{
         event.preventDefault();
        setShowEdit(!showEdit);
     }
    
     //RETURN section
    return(
        <div className='event'>
            <p>This is the singular EVENT component !</p>
            <button onClick={showEditSettr}>Click ME to flip show edit bit!</button>
            {showEdit && <EditEvent />}
        </div>
    )
}

//RETURN section
export default Event;