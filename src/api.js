import axios from 'axios';

export default axios.create({
    baseURL: 'https://backend-gaitwell.herokuapp.com',
});