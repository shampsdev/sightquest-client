import React from 'react';
import {RegisteredStyle, StyleSheet, ViewStyle} from 'react-native';

import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';
import {useState} from 'react';
import LeftArrow2 from '@/assets/icons/left-arrow-2.icon';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 80;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

type SwipeButtonProps = {
  additionStyles?: ViewStyle | RegisteredStyle<View>;
  // eslint-disable-next-line no-unused-vars
  onToggle: (value: boolean) => void;
}

const SwipeButton = ({additionStyles, onToggle} : SwipeButtonProps) => {
  const X = useSharedValue(0);
  const [toggled, setToggled] = useState(false);

  const handleComplete = (isToggled: boolean) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withTiming(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withTiming(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,

        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ['#D3D3D3', '#EBEBEB'],
        ),
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View
      style={[styles.swipeCont, AnimatedStyles.swipeCont, additionStyles]}
    >
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
          <LeftArrow2
            style={[styles.swipeableContent]}
          />  
        </Animated.View>
      </PanGestureHandler>
      <Animated.Text 
        style={[styles.swipeText, AnimatedStyles.swipeText]}
      >
        Swipe чтобы начать игру
      </Animated.Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    borderRadius: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    display: 'flex',
    backgroundColor: '#EBEBEB',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: 'absolute',
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },
  swipeableContent: {
    position: 'absolute',
    left: BUTTON_PADDING * 2,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    zIndex: 4,
  },
  swipeText: {
    color: '#767676',
    alignSelf: 'center',
    fontFamily: 'Inter-Black',
    fontSize: 16,
    zIndex: 2,
  },
});

export default SwipeButton;