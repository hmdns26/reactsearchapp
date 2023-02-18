import axios from "axios";
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID Zzn7Idx7_ZX8wTKwAS27rIcnMmSrVohSjHzjz2FNiH0'
    }
});