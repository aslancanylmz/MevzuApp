import {Dimensions} from 'react-native';
export const COLORS = {
  white: '#fff',
  black: '#000',
  green: '#39e75b',
  shadow: '#999',
  red:'#ff4045'
};

export const SIZES = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
};

export const STYLES = {
  dropShadow: {
    shadowColor: COLORS.shadow,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0.7,
    elevation: 3,
  },
};
