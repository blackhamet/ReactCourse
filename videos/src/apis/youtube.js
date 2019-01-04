import axios from 'axios';

const KEY = 'AIzaSyAvL3QdpFH_PC5VW-xPn0OVuL8yJhzSXyw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});