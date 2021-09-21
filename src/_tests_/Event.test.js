import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe('<Event/> component', () => {
    
  test('render event title', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('.title')).toHaveLength(1)
        
    });

    test('render date and time', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('.time')).toHaveLength(1)
    });

    test('render locations', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('.location')).toHaveLength(1)
    });

    test('render view details button', () => {
        const EventWrapper = shallow(<Event />);
        expect(EventWrapper.find('.details')).toHaveLength(1)
    });
    
});
