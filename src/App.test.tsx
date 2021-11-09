import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { App } from './App';

describe('App integration test', () => {
  // it('should render without error', () => {
  //   render(<App />);
  //   // expect(screen.getByText('hell world!')).toBeInTheDocument();
  //   expect(screen.getByRole('button')).toBeInTheDocument();
  // });

  test('on load, page renders welcome message and allows users to view a character', async () => {
    render(<App />);
    expect(screen.getByText('Welcome!'));
    const button = screen.getByRole('button', { name: /squantch/i });
    userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Rick'));
    });

    expect(screen.getByText('Associates'));
  });
});
