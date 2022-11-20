import APIAxiosRequest from "../config/axios.config";

export function getRandomJokey() {
    return APIAxiosRequest.get('/');
}
