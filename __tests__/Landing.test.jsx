// Unit: Test to ensure that the landing page displays the navbar with index link, and nav menu and also that the background image and hero text is displayed.
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Landing from '../components/Landing';

describe('Landing', () => {
  it('Should display the navbar and hero elements', () => {
    render(<Landing />);

    const heroImage = screen.getByAltText('Background Image');
    const heroText = screen.getByText('Lee Johnson');
    const navLogo = screen.getByText('Nefelibata.');
    const navMenu = screen.getByRole('menu');

    // Hero image
    expect(heroImage).toBeInTheDocument();

    // Hero Text
    expect(heroText).toBeInTheDocument();
    expect(heroText).toHaveTextContent('Lee Johnson');

    // navLogo
    expect(navLogo).toBeInTheDocument();
    expect(navLogo).toHaveTextContent('Nefelibata.');

    // navMenu
    expect(navMenu).toBeInTheDocument();
  });
});
