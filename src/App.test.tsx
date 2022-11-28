import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render app component', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app');
  expect(linkElement).toBeInTheDocument();
});
