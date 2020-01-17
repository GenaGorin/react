import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state)", () => {
        const component = create(<ProfileStatus status="228 AYE" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("228 AYE");
    });

    test("After render span shoild be displayed)", () => {
        const component = create(<ProfileStatus status="228 AYE" />);
        const instance = component.root;
        //const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span).not.toBeNull();
    });

    test("After render input should not be displayed)", () => {
        const component = create(<ProfileStatus status="228 AYE" />);
        const instance = component.root;
        //const instance = component.getInstance();
        expect(()=> {
            let input = instance.findByType('input');
        }).toThrow();
    });

    test("After render text in span should be like status", () => {
        const component = create(<ProfileStatus status="228 AYE" />);
        const instance = component.root;
        //const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span.children[0]).toBe("228 AYE");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateProfileStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.startOrStopEditMode(false);
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
