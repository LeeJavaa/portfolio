import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/index';

const { performance } = require('perf_hooks');

describe('Home Page', () => {
  it('Should load for two seconds', async () => {
    render(<Home />);
    const startTime = performance.now();
    await screen.findByAltText('Background Image', undefined, {
      timeout: 2050,
    });
    const endTime = performance.now();
    expect(endTime - startTime).toBeCloseTo(2000, -2); // Within 50 milliseconds of 2 seconds
  });

  it('Should display the loader in the beginning', () => {
    render(<Home />);

    const loadingIcon = screen.getByAltText('Loading Icon');

    expect(loadingIcon).toBeInTheDocument();
  });

  it('Should display the landing page two seconds after open', async () => {
    render(<Home />);

    const heroImage = await screen.findByAltText(
      'Background Image',
      undefined,
      { timeout: 2050 }
    );
    const heroText = await screen.findByText('Lee Johnson');
    const navLogo = await screen.findByText('Nefelibata.');
    const navMenu = await screen.findByRole('menu');

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
