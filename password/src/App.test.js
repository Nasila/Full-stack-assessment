import { render, screen } from '@testing-library/react';
import PasswordStrengthValidator from './PasswordStrengthValidator';

test('renders Password link', () => {
  render(<PasswordStrengthValidator />);
  const linkElement = screen.getByText(/Password Strength/i);
  expect(linkElement).toBeInTheDocument();
});
