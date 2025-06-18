import axios from "axios";

const baseURL = "http://localhost:3000";

export const getAllPosts = () => {
    const response = axios.get(`${baseURL}/post/findAll?limit=10&offset=1`);

    return response;
};
