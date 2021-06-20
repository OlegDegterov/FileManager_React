import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://164.90.161.80:3000/api/content"
});

export const API = {
    getData() {
        return instance.get()
            .then(response => {
                return response.data;
            });
    },
    getDataId(id) {
        return instance.get(`?dirId=${id}`)
            .then(response => {
                return response.data;
            });
    }
}

