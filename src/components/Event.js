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

//LOGIC section
 const Event=(props)=>{
     //DATA section
    const showEdit = props;
     //LOGIC section
    showEdit = true;
     //RETURN section
    return(
        <div className='event'>
            <p>This is the EVENT component !</p>
        </div>
    )
}

//RETURN section
export default Event;