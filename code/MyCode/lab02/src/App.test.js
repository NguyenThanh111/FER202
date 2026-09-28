import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('opens the detail modal when clicking a Detail button', async () => {
  render(<App />);

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

  const detailButtons = screen.getAllByRole('button', { name: /detail/i });
  await userEvent.click(detailButtons[0]);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toBeInTheDocument();
  expect(dialog).toHaveTextContent('Taichung Beauty');
});
