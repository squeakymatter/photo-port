import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav />);
  });
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    //assert value comparison
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    //Arrange
    //arrange the parts of the comonent we need to access. Note that emoji is located in <span> inside <h2> element in Nav component
    const { getByLabelText } = render(<Nav />);
    //Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into links', () => {
    //Arrange
    //added data-testid attribute to JSX `Nav` component
    const { getByTestId } = render (<Nav />)
    //Assert
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');


    
  });
});
