import {StyleSheet} from 'react-native';

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
});

export default styles;
