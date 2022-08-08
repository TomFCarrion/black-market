import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../pages/App';

describe('App tests', () => {
  it('should contains thsosoe heading 1', () => {
    render(<App />);
    const heading = screen.getByText(/Black Market!/i);
    expect(heading).toBeInTheDocument();
  });
});
