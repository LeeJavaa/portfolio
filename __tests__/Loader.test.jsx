import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';
import '@testing-library/jest-dom';

describe('Loader', () => {
  it('Should display the background image when loading ', () => {
    render(<Loader />);

    const loadingIcon = screen.getByAltText('Loading Icon');

    expect(loadingIcon).toBeInTheDocument();
  });
});
