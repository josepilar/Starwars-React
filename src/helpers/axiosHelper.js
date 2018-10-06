import axios from 'axios';

export default function axiosHelper(types, config) {
    // types will be used later
    return axios({config});
}