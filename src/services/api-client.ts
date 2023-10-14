import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '00fd899fd2e24e168fc1cc8fa05d9235'
    }
})