import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders the app title and subtitle', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /simple app/i })).toBeInTheDocument();
    expect(screen.getByText(/production-ready react on aws ec2/i)).toBeInTheDocument();
  });

  it('renders counter with initial value of 0', () => {
    render(<App />);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  it('increments counter when Increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    await user.click(incrementButton);
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument();

    await user.click(incrementButton);
    expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();
  });

  it('resets counter to 0 when Reset button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    await user.click(incrementButton);
    await user.click(incrementButton);
    expect(screen.getByText(/counter: 2/i)).toBeInTheDocument();

    await user.click(resetButton);
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument();
  });

  it('renders both Increment and Reset buttons', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /increment/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('renders footer with build info', () => {
    render(<App />);
    expect(screen.getByText(/built with react \+ vite/i)).toBeInTheDocument();
  });
});
