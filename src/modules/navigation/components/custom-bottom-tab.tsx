import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { BottomTabIcon } from './bottom-tab.icon';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { colors } from '@/constants/colors';

export const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { width } = useWindowDimensions();
  const MARGIN = 20;
  const TAB_BAR_WIDTH = width - 2 * MARGIN;
  const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;

  const translateAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withTiming(TAB_WIDTH * state.index, { duration: 200 }) }],
    };
  });

  return (
    <View
      style={[styles.container, { width: TAB_BAR_WIDTH, bottom: MARGIN }]}>
      <Animated.View
        className='items-center justify-center'
        style={[
          StyleSheet.absoluteFillObject,
          { width: TAB_WIDTH },
          translateAnimation,
        ]}
      >
        <View style={styles.circle}/>
      </Animated.View>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            key={index}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View className='flex-1 justify-center items-center gap-y-1'>
              <BottomTabIcon route={route.name} isFocused={isFocused} />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 80,
    position: 'absolute',
    borderRadius: 100,
    alignSelf: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    overflow: 'hidden'
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 100,
    backgroundColor: colors.primary,
  }
})