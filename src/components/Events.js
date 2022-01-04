//this is the PLURAL EVENTS component
//it will render out all viewable events

//DATA section
import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

//LOGIC section
 const Events=(props)=>{
     //DATA section

     //LOGIC section

     //RETURN section
    return(
        <div className='events-list'>
            <p>This is the MULTIPLE-EVENTS  component !</p>
            <br>
            </br>

            <Link to='/event'>Click ME to see a single EVENT!</Link>
        </div>
    )
}

//RETURN section
export default Events;
//needful:: will do a map over each event, rendering a link to each in the above Link comp!