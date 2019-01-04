import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID 3885d4470f5bfe96e2136ac729fd1a75b82432b0eca1569ef113102b5d5a21dc'
    }
});