import axios from 'axios';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({ //creating a base URL
        headers: {
            authorization: token
        },
        baseURL: "baseUrl"
    });
}

export default axiosWithAuth;