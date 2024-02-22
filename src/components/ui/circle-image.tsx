import React from 'react';
import { ImageSourcePropType, ImageStyle } from 'react-native';
import { Image } from 'react-native';

export const CircleImage = ({
  source,
  styles,
}: {
  source: ImageSourcePropType;
  styles?: ImageStyle;
}) => {
  return (
    <Image
      style={[
        {
          height: 64,
          width: 64,
          borderRadius: 100,
        },
        styles,
      ]}
      source={source}
    />
  );
};
