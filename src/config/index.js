import {REACT_APP_BASE_URL} from "../config";
const getEnvironment = () => {
    const{
        location:{hostname}, 
    } =window;
    const [env] = hostname.split('.');
    if(!env || env === "localhost"){
        return 'div';
    }
    return env;
}

export const baseURL = REACT_APP_BASE_URL;