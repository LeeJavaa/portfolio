import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Landing from '../components/Landing';

describe('Landing', () => {
  it('Should display the hero elements', () => {
    render(<Landing />);

    const heroImage = screen.getByAltText('Background Image');
    const heroText = screen.getByText('Lee Johnson');

    // Hero image
    expect(heroImage).toBeInTheDocument();

    // Hero Text
    expect(heroText).toBeInTheDocument();
    expect(heroText).toHaveTextContent('Lee Johnson');
  });
});
