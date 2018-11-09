import axios from "axios";
import { ADD_COMMENT, FETCH_COMMENTS } from "./types";

export const addComment = (comment) => ({
    type: ADD_COMMENT,
    payload: comment
});

export function fetchComments() {
    const request = axios.get("https://jsonplaceholder.typicode.com/comments");

    return {
        type: FETCH_COMMENTS,
        payload: request
    };
}
