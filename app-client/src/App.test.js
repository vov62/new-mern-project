import { render, screen } from '@testing-library/react';
import App, { avergeNum } from './App';

// test('should return the average number', () => {
//   expect(avergeNum(60, 70, 80, 90)).toBe(75)
// })


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
