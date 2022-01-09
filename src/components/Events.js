//this is the PLURAL EVENTS component
//it will render out all viewable events

//DATA section
import React from 'react';

//LOGIC section
 const Events=()=>{
     //DATA section

     //LOGIC section

     //RETURN section
    return(
        <div className='events-list'>
           
            <iframe title='caltitle' id='calendar-styles' src="https://calendar.google.com/calendar/embed?src=hdo5309tq5gop0pul9hcn07isc%40group.calendar.google.com&ctz=America%2FDenver" ></iframe>

            {/* <Link to='/event'>Click ME to see a single EVENT!</Link> */}
        </div>
    )
}

//RETURN section
export default Events;