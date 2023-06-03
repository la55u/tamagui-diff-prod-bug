import { createStyledContext, Stack, styled, Text, withStaticProperties } from '@tamagui/web';
import { Button } from 'tamagui';

// unrelated but very weird bug: comment out the following line,
// build the app and it will crash when prod build is served (works in dev)
// for some reason it _needs_ to be here
export const OldButton = styled(Button, {});

const ButtonContext = createStyledContext({
  variant: 'test',
});

const ButtonFrame = styled(Stack, {
  tag: 'button',
  context: ButtonContext,
  px: '$4',
  py: '$2',

  variants: {
    variant: {
      test: {
        bg: '$primary',
      },
    },
  } as const,
});

const CustomButtonText = styled(Text, {
  context: ButtonContext,
  variants: {
    variant: {
      test: {
        color: '$primaryContrast',
      },
    },
  } as const,
});

export const CustomButton = withStaticProperties(ButtonFrame, {
  Text: CustomButtonText,
  Props: ButtonContext.Provider,
});
