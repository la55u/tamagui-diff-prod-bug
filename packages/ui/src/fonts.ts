import { createFont } from 'tamagui';

export const headingFont = createFont({
  family: 'System',
  size: {
    2: 12,
    4: 14,
    6: 16,
    8: 18,
    true: 16,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    4: '400',
    5: '500',
    6: '600',
    7: '700',
  },
  letterSpacing: {
    true: 0,
  },
  face: {},
});

export const bodyFont = headingFont;
