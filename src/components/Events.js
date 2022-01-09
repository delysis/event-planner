//this is the PLURAL EVENTS component
//it will render out all viewable events

//DATA section
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';

//LOGIC section
 const Events=(props)=>{
     //DATA section
     const [date,setDate] = useState(new Date());

     //LOGIC section

     //RETURN section
    return(
        <div className='events-list'>
             <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
            <Link to='/event'>Click ME to see a single EVENT!</Link>
        </div>
    )
}

//RETURN section
export default Events;
//needful:: will do a map over each event, rendering a link to each in the above Link comp!