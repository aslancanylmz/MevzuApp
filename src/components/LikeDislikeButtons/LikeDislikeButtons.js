import {View, Text} from 'react-native';
import React from 'react';
import {Icon, iconNames} from '../icon/icon';
import styles from './styles';
import {COLORS} from '../../constants/theme';

const LikeDislikeButtons = ({dislikeButtonPress, likeButtonPress}) => {
  return (
    <View style={styles.buttonsContainer}>
      <Icon
        style={styles.likeDislikeButton}
        width={32}
        height={32}
        color={COLORS.black}
        iconName={iconNames.Cross}
        onPress={dislikeButtonPress}></Icon>
      <Icon
        style={styles.likeDislikeButton}
        width={32}
        height={32}
        iconName={iconNames.Like}
        onPress={likeButtonPress}></Icon>
    </View>
  );
};

export default LikeDislikeButtons;
