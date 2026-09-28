import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('data-bs-theme');
});

test('login shows the welcome message and logout clears it', async () => {
  render(<App />);

  expect(screen.getByPlaceholderText('Log in as (ex: Aaron)')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(screen.getByText('Welcome, Aaron')).toBeInTheDocument();

  await userEvent.click(screen.getByRole('button', { name: /logout/i }));
  expect(screen.getByPlaceholderText('Log in as (ex: Aaron)')).toBeInTheDocument();
});

test('user is persisted to localStorage and restored on reload', async () => {
  const first = render(<App />);
  await userEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(JSON.parse(localStorage.getItem('orchid-auth-user'))).toEqual({ username: 'Aaron' });
  first.unmount();

  render(<App />);
  expect(screen.getByText('Welcome, Aaron')).toBeInTheDocument();
});

test('theme toggle switches the document theme', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /dark/i }));
  expect(document.documentElement.getAttribute('data-bs-theme')).toBe('dark');

  await userEvent.click(screen.getByRole('button', { name: /light/i }));
  expect(document.documentElement.getAttribute('data-bs-theme')).toBe('light');
});
