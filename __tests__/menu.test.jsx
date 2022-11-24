import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
const { default: Navbar } = require('../components/Navbar');

describe('Menu Page', () => {
  it('Should change menu state when clicked', () => {
    const handleClick = jest.fn(); // Mocks the menu state handler in the index file
    render(<Navbar showMenu={handleClick} />);
    let navMenu = screen.getByRole('menu');
    expect(navMenu.firstChild.classList.contains('closed')).toBe(true);
    expect(navMenu.firstChild.classList.contains('opened')).toBe(false);

    fireEvent.click(navMenu);
    expect(handleClick).toHaveBeenCalledTimes(1);

    fireEvent.click(navMenu);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('Menu icon should change on click', () => {
    let menu = false;
    const handleClick = () => {
      if (menu) {
        menu = false;
      } else {
        menu = true;
      }
    };
    const { rerender } = render(<Navbar showMenu={handleClick} menu={menu} />);
    let navMenu = screen.getByRole('menu');
    expect(navMenu.firstChild.classList.contains('closed')).toBe(true);
    expect(navMenu.firstChild.classList.contains('opened')).toBe(false);

    fireEvent.click(navMenu);
    rerender(<Navbar showMenu={handleClick} menu={menu} />);
    expect(navMenu.firstChild.classList.contains('closed')).toBe(false);
    expect(navMenu.firstChild.classList.contains('opened')).toBe(true);

    fireEvent.click(navMenu);
    rerender(<Navbar showMenu={handleClick} menu={menu} />);
    expect(navMenu.firstChild.classList.contains('closed')).toBe(true);
    expect(navMenu.firstChild.classList.contains('opened')).toBe(false);
  });

  it('Should contain menu elements', () => {});
  it('Should display the footer', () => {});
});
