import { ADD_COMMENT } from "../types";
import { addComment } from "../index";

describe('addComment action', () => {
    it("has the correct type", () => {
        const action = addComment();
        expect(action.type).toEqual(ADD_COMMENT);
    });

    it("has the correct payload", () => {
        const action = addComment("New comment");
        expect(action.payload).toEqual("New comment");
    });
});
