import { borderRadius, colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  border: {
    borderRadius: borderRadius,
    padding: 12,
    backgroundColor: colors.primary,
  }
})