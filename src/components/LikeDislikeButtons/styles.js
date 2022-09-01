import {StyleSheet} from 'react-native';
import {COLORS, STYLES} from '../../constants/theme';

export const styles = StyleSheet.create({
  likeDislikeButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 0.5,
    borderColor: COLORS.shadow,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 12,
    ...STYLES.dropShadow,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
