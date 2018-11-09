import { ADD_COMMENT } from "../../actions/types";
import CommentsReducer from "../commentsReducer";

it("hands actions with a type of add_comment", () => {
    const action = {
        type: ADD_COMMENT,
        payload: "New comment"
    };
    const newState = CommentsReducer([], action);
    expect(newState).toEqual(["New comment"]);
});

it("other type actions", () => {
    const newState = CommentsReducer([], {});
    expect(newState).toEqual([]);
});