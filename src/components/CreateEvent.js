// //this is the CREATE event component!
// //it handles the control of creating an event, then saves that event in state

// //CREATE EVENT NEEDFUL: LOCATION, DATETIME, ATTENDING

// //DATA section
import React from 'react';

// //LOGIC section
 const CreateEvent=(props)=>{
     //DATA section
    //  const [event,setEvent] = useState(eventDefault)
     const {submit,change} = props;
     const {location,date,time} = props.values;

     //LOGIC section
    const changeHandle=(event)=>{
      const {name} = event.target;  
      change(name);
    }

    const submitHandle=(event)=>{
        event.preventDefault();
        submit();

    }

     //RETURN section
    return(
        <div className='create-event'>
            <form id='create-event-id'>
            <lable>Location:
                    <input 
                    type='text'
                    name='location'
                    value={location}
                    onChange={changeHandle}
                    
                    />
                </lable>
                <lable>Date:
                    <input 
                    type='text'
                    name='date'
                    value={date}
                    onChange={changeHandle}
                    
                    />
                </lable>
                <lable>Time:
                    <input 
                    type='text'
                    name='time'
                    value={time}
                    onChange={changeHandle}
                    
                    />
                </lable>
            </form>
        </div>
    )
}

// //RETURN section
 export default CreateEvent;