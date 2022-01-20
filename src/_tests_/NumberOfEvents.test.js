import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("render text input", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents = {() => {}} />);
    expect(NumberOfEventsWrapper.find(".numberEvents")).toHaveLength(1);
  });
  test("initial state should be 32", () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents = {() => {}} />);
    expect(NumberOfEventsWrapper.state("numOfEvents")).toBe(32);
  });
  test("number displayed in the input should be value of the state" , () => {
      const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents = {() => {}} />);
      expect(NumberOfEventsWrapper.find(".numberEvents").prop("value")).toBe(32);
  });
  test("numbOfEvents should change when the user types into the input" , () => {
    const NumberOfEventsWrapper = shallow(<NumberOfEvents updateNumberOfEvents = {() => {}} />);
    NumberOfEventsWrapper.setState({ numOfEvents: 32 });
    const eventValue = { target: { value: 10 }};
    NumberOfEventsWrapper.find('.numberEvents').simulate('change', eventValue);
    expect(NumberOfEventsWrapper.state("numOfEvents")).toBe(10);
  });
});
