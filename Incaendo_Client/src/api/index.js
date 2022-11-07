import axios from "axios";

const url = 'http://3.110.77.190:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);