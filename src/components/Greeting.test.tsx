import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import merge from 'lodash.merge';
import { Greeting, Services } from './Greeting';

describe('Greeting', () => {
  function createServices(overrides?: Partial<Services>): Services {
    const defaultServices: Services = {
      getCharacterCount: async () => Promise.resolve(3),
    };

    return merge(defaultServices, overrides);
  }

  it('should render welcome', () => {
    render(<Greeting services={createServices()} />);

    expect(screen.getByRole('heading', { name: 'Welcome!' }));
    expect(screen.getByText('Learn about random characters and their encounters'));
    expect(screen.getByRole('button', { name: /squantch/i }));
  });

  describe('when the api fails', () => {
    it('should render an error screen', async () => {
      render(
        <Greeting
          services={createServices({
            getCharacterCount: async () => Promise.reject(new Error('poop')),
          })}
        />
      );

      userEvent.click(screen.getByRole('button', { name: /squantch/i }));

      await waitFor(
        () => {
          screen.getByText('loading');
        },
        { timeout: 5000 }
      );

      await waitFor(() => {
        screen.getByText('Oh no something went wrong!');
      });
    });
  });

  describe('when the api succeeds', () => {
    it.todo('should render a loading spinner, followed by the character');
  });
});
