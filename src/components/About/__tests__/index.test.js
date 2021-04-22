import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    //renders About test

    //First Test
    //string 'renders' declares what will be tested, followed by callback function that runs the test
    it('renders', () => {
        render(<About />);
    });
    it('matches snapshot DOM node structure', () => {
        //render About
        //asFragment function returns snapshot of `About` component
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })


})