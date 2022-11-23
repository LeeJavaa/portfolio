import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('Should display the navbar elements', () => {
    render(<Navbar />);

    const navLogo = screen.getByText('Nefelibata.');
    const navMenu = screen.getByRole('menu');
    // navLogo
    expect(navLogo).toBeInTheDocument();
    expect(navLogo).toHaveTextContent('Nefelibata.');

    // navMenu
    expect(navMenu).toBeInTheDocument();
  });
});
