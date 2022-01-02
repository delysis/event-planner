//...and THIS is the login component
//it allows a user to log in, creating a token and saving that to local storage.

//as we will be using a little more complicated state here, we will use a class component woo 

import React from 'react';

class Login extends React.Component{
    //DATA section

    //RENDER section
    render(){
        return(
            <div className='login-card'>
                <h2>This is the LOGIN component !</h2>
                <button>Log me IN !</button>
            </div>
        )
    }
}

export default Login;