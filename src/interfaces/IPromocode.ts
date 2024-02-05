import { ImageSourcePropType } from "react-native";

export interface IPromocode {
  title: string;
  image: ImageSourcePropType;
  grayImage: ImageSourcePropType;
  promo: string;
  kitchen: string;
  address: string;
  description: string;
}
