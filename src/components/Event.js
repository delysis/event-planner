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
import axiosWithAuth from './utils/axiosWithAuth';



//LOGIC section

 const Event=(props)=>{
     //DATA section
    const [showEdit,setShowEdit] = useState(false);
    const [event,setEvent] = useState([]);

    const formId = '54de8231dd925535'; //HEY FUTURE CLAIRE: BE SURE TO MOVE THIS SOMEWHERE ELSE AFTER YOU TEST!

     //LOGIC section

     useEffect(() => {
        axiosWithAuth()
        .get(`/v1beta/forms/${formId}`)
        .then(res=>{
            setEvent(res.analyticsdata); 
        }).catch(err=>{
            console.error(err);
        })
    },[]); //'on first mount, do this'

     const showEditSettr=(event)=>{
         event.preventDefault();
        setShowEdit(!showEdit);
     }
    
     //RETURN section
    return(
        <div className='event'>
            <p>This is the singular EVENT component !</p>
            <button onClick={showEditSettr}>Click ME to flip show edit bit!</button>

            <div className='gform'>
            {props.event}
            </div>
            
            {showEdit && <EditEvent />}
        </div>
    )
}

//RETURN section
export default Event;