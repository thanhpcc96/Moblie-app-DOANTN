import axios from 'axios';
import { Platform } from 'react-native';

let url;
if (Platform.OS !== 'ios') {
    url = "http://192.168.0.10:3000/api/v1";
} else {
    url = "http://localhost:3000/api/v1"
}
axios.defaults.baseURL = url;

const fakeClientUser = '';
class ClientApi {
    constructor() {
        this.clientId = fakeClientUser;
        this.path = `/client/`;
    }
    async fetchInfoClient() {
        try {
            const { data } = await axios.get(this.path + 'profile/:' + this.clientId);
            return data.result;
        } catch (err) {

        }
    }
}

