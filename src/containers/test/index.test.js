import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from '../index';

describe('<App /> component testing ', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('Connected App', () => {
        expect(wrapper).to.exist;
    });
});

