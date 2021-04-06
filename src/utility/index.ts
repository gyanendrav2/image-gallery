import axios from 'axios';

export const API = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID s-Ao1b607O9KFpQiUqpYymG7VISJarQ70mZDVw-AYCE',
    },
});
