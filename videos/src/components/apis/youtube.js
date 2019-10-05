import axios from 'axios';
const KEY='AIzaSyBQYLa-VxJUOTGasVijt8TUuN1D82xSKVw';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:10,
        key:KEY
       }
})