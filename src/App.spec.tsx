import { render, screen } from '@testing-library/react';
import App from './App';

test('should render main app', () => {
  render(<App />);

  expect(screen.getByText('React 19 with Tailwind CSS v4')).toBeInTheDocument();
});
