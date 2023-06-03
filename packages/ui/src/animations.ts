import { createAnimations } from '@tamagui/animations-react-native';

export const animations = createAnimations({
  quick: {
    type: 'spring',
    damping: 11,
    mass: 0.5,
    stiffness: 160,
  },
  quickLinear: {
    type: 'timing',
    duration: 200,
  },
});
