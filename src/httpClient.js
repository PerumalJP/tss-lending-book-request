
import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8080/LibraryAPI/api/Library'
})

export default httpClient;