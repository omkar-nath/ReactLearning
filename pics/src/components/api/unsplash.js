import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com/search/photos',
    headers:{
        Authorization:
        'Client-ID a5a4eb81947ae1a43196b163aad93bc67dc1ac87b2719cf14976a29cba1d8554'
    }
});