import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = 'hr48MX4BAAA.bqXz99bgS0mSM9BPt_K7mA.pPf1zbNJxp7eH9_NpB1q7Q'; //HEY FUTURE CLAIRE BE SURE TO MOVE THIS SOMEWHERE ELSE!

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "https://docs.google.com/forms/u/0/d/1JC-zABOglm4U7-uHkJstAqvpBzEMzAO8ToGH1Y7661I/aggregatestatistics?sid=54de8231dd925535&vc=0&c=0&w=1&flr=0&token=hr48MX4BAAA.bqXz99bgS0mSM9BPt_K7mA.pPf1zbNJxp7eH9_NpB1q7Q"
    });
}

export default axiosWithAuth;