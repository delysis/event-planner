import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = 'hr48MX4BAAA.bqXz99bgS0mSM9BPt_K7mA.pPf1zbNJxp7eH9_NpB1q7Q'; //HEY FUTURE CLAIRE BE SURE TO MOVE THIS SOMEWHERE ELSE!

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "https://forms.googleapis.com"
    });
}

export default axiosWithAuth;