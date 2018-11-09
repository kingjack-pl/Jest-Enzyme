import React from "react";
import { mount } from "enzyme"
import CommentBox from "../CommentBox";
import Root from "../../root";

let wrapped;

beforeEach(() => {
    wrapped = mount(<Root>
        <CommentBox />
    </Root>);
});

afterEach(() => {
   wrapped.unmount();
});

it("has a text area and two buttons", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe("the text area", () => {
    beforeEach(() => {
        wrapped.find("textarea").simulate("change", {
            target: {
                value: "new comment"
            }
        });

        wrapped.update();
    });

    it("can enter input into the text area", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("submit button and set empty teaxtarea", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
