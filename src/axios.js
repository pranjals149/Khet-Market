import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/khet-market/us-central1/api' // The api(cloud function) URL
});

export default instance;