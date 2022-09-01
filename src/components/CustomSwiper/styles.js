import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const styles = StyleSheet.create({
  swiperContainer: {
    backgroundColor: COLORS.white,
    height: ((SIZES.screenWidth + 20) / 1.4) * 2,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 20,
  },
  swiperCard: {
    backgroundColor: COLORS.white,
    height: ((SIZES.screenWidth - 10) / 1.4) * 2,
  },
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
  emptyListDescription: {
    textAlign: 'center',
    fontSize: 24,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  refreshButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likeLabel: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.white,
    color: COLORS.white,
    borderWidth: 1,
    fontSize: 14,
  },
  dislikeLabel: {
    backgroundColor: COLORS.red,
    borderColor: COLORS.white,
    color: COLORS.white,
    borderWidth: 1,
    fontSize: 14,
  },
  dislikeWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: -10,
  },
  likeWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
