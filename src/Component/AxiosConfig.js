import axios from "axios";

const axiosObject=axios.create({
    baseURL:'http://localhost:3200/'
});

axiosObject.interceptors.request.use(
    (config)=>{
        return config;
    }
)

export default axiosObject