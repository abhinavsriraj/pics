import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID RnqFE0F7GIhSRV35CIClivm51Ev2Tm6a0fcdZA89afk'
    }
})
