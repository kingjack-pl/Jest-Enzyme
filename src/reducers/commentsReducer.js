import { ADD_COMMENT, FETCH_COMMENTS } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            const comment = action.payload.data.map(comment => comment.name);
            return [...state, ...comment];

        default:
            return state;
    }
}