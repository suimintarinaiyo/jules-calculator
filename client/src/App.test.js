import { render } from '@testing-library/react';
import App from './App';

test('renders calculator with initial display of 0', () => {
  const { container } = render(<App />);
  const displayElement = container.querySelector('.current-operand');
  expect(displayElement).toHaveTextContent('0');
});
