import { render } from '@testing-library/react';
import React from 'react';
import { Menu } from './Menu';

test('Menu is rendering', async () => {
  render(<Menu />);
});
