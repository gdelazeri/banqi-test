import { CardStyleInterpolators } from '@react-navigation/stack';

export const stackFromBottomOverlay = (cardStyle, overlayStyle = {}) => {
  return {
    animationEnabled: true,
    cardStyle: {
      ...cardStyle,
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: 30,
    },
    cardOverlayEnabled: true,
    cardStyleInterpolator: (input) => {
      const {
        current: { progress },
      } = input;
      const interpolatedOpacity = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
      });
      return {
        ...CardStyleInterpolators.forModalPresentationIOS(input),
        overlayStyle: {
          ...overlayStyle,
          opacity: interpolatedOpacity,
        },
      };
    },
  };
};
