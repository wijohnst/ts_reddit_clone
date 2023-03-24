import { screen, render, fireEvent } from '@testing-library/react';
import ClickableLogo from './ClickableLogo';

// testing for Icon component
it('should have an Icon component', () => {
  const handleClick = jest.fn();
  render(<ClickableLogo onClick={handleClick} />);
  expect(screen.getByTestId('clickableicon-icon')).toBeInTheDocument();
});

// testing for Wordmark component
it('should have a Wordmark component', () => {
  const handleClick = jest.fn();
  render(<ClickableLogo onClick={handleClick} />);
  expect(screen.getByTestId('clickableicon-wordmark')).toBeInTheDocument();
});

// testing that our handleClick fires
describe('ClickableLogo', () => {
  it('should trigger onClick function', () => {
    const handleClick = jest.fn();
    render(<ClickableLogo onClick={handleClick} />);
    const clickablelogo = screen.getByTestId('clickablelogo');
    fireEvent.click(clickablelogo);
    expect(handleClick).toHaveBeenCalled();
  });
});
