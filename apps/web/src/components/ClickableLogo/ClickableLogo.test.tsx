import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClickableLogo from './ClickableLogo';

describe('ClickableLogo', () => {
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
  it('should trigger onClick function when the logo is clicked', async () => {
    const handleClick = jest.fn();
    render(<ClickableLogo onClick={handleClick} />);
    await userEvent.click(screen.getByTestId('clickablelogo'));
    expect(handleClick).toHaveBeenCalled();
  });
});
