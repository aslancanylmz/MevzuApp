import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants/theme';

export const styles = StyleSheet.create({
  firstImageContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  secondImageContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    marginTop: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
  nameText: {
    position: 'absolute',
    left: 15,
    bottom: 10,
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '500',
  },
});

export default styles;
