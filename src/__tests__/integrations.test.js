import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../root";
import App from "../components/App";

beforeEach(() => {
	moxios.install();
	moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
		status: 200,
		response: [{name: "Comment 1"}, {name: "Comment 2"}]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it("can a list comment and show this on the screen", (done) => {
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);

	wrapped.find(".fetch-btn").simulate("click");

	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find("li").length).toEqual(2);

		done();

		wrapped.unmount();
	});
});
