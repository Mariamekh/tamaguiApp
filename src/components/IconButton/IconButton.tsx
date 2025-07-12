import {Button, ButtonProps} from 'tamagui';

export const IconButton = (props: ButtonProps) => (
  <Button
    {...props}
    circular
    size="$3"
    chromeless
    padding="$2"
    backgroundColor="transparent"
  />
);
