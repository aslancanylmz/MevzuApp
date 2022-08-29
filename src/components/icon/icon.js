import React from 'react';
import Svg, {
  Circle,
  G,
  Path,
  Rect,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
  Polygon,
  Ellipse,
} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../constants/theme';

const iconNames = {
  Eye: 'Eye',
};
const Icon = ({iconName, style, onPress, width, height, color}) => {
  switch (iconName) {
    case iconNames.Eye:
      return (
        <TouchableOpacity onPress={onPress} disabled={!onPress} style={style}>
          <Svg
            width={width ?? '20'}
            height={height ?? '20'}
            viewBox="0 0 20 20"
            fill="none">
            <Path
              d="M10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5V12.5Z"
              fill={color ?? COLORS.white}
            />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.664005 10.59C0.517109 10.2083 0.517109 9.78569 0.664005 9.404C1.39123 7.51849 2.67246 5.89744 4.33896 4.75431C6.00547 3.61117 7.97911 2.99956 10 3C14.257 3 17.893 5.66 19.336 9.41C19.483 9.791 19.482 10.214 19.336 10.596C18.6088 12.4815 17.3276 14.1026 15.661 15.2457C13.9945 16.3888 12.0209 17.0004 10 17C5.743 17 2.107 14.34 0.664005 10.59V10.59ZM14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93914 14 7.92172 13.5786 7.17158 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17158 7.17157C7.92172 6.42143 8.93914 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10V10Z"
              fill={color ?? COLORS.white}
            />
          </Svg>
        </TouchableOpacity>
      );
    default:
      break;
  }
};

export {Icon, iconNames};