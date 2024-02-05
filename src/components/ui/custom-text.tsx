import React from 'react';
import { RegisteredStyle, StyleSheet, Text, TextStyle } from 'react-native';

type IText = {
  children?: string;
  size?: 'xs' | 'lg' | 'xl' | '2xl' | '3xl';
  styles?:
    | TextStyle
    | RegisteredStyle<TextStyle>
    | (TextStyle | RegisteredStyle<TextStyle> | undefined)[];
};

export function CustomText({ children, size, styles }: IText) {
  const textSizeStyles = getSizeStyles(size);

  return (
    <Text
      style={[
        textStyles.text,
        textSizeStyles,
        ...(Array.isArray(styles) ? styles : [styles]),
      ]}
    >
      {children}
    </Text>
  );
}

const textStyles = StyleSheet.create({
  text: {
    fontFamily: 'Inter-Black',
  },
});

const getSizeStyles = (size?: 'xs' | 'lg' | 'xl' | '2xl' | '3xl') => {
  switch (size) {
    case 'xs':
      return { fontSize: 12 };
    case 'lg':
      return { fontSize: 18 };
    case 'xl':
      return { fontSize: 24 };
    case '2xl':
      return { fontSize: 32 };
    case '3xl':
      return { fontSize: 40 };
    default:
      return {};
  }
};
