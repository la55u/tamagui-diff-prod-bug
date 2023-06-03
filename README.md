# Tamagui bug report

## Bug description

Styles are different in dev and prod

## To reproduce

1. clone the repo
2. run `yarn`
3. run `yarn web`
4. open localhost:3000 and confirm the button has purple background and white text color
5. kill the console
6. run `yarn build:web && yarn start:web`
7. refresh the browser and see that the text is not white anymore

> NOTE: another thing that might be completely unrelated but it's a very weird behavior: see the comment in `button.tsx`
