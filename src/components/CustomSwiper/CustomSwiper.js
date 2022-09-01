import {Text} from 'react-native';
import React from 'react';
import Swiper from 'react-native-deck-swiper';
import {CustomImage} from '../CustomImage/CustomImage';
import {URLS} from '../../constants/appConstants';
import FastImage from 'react-native-fast-image';
import {Icon, iconNames} from '../icon/icon';
import styles from './styles';

export default function CustomSwiper({matchList, setSwipeAll, swiperRef}) {
  const MatchItem = (item, index) => {
    return (
      <>
        <CustomImage
          image={`${URLS.baseUrl}${item?.user_1_photo_link}`}
          marginSize={40}
          containerStyle={styles.firstImageContainer}
          resizeMode={FastImage.resizeMode.cover}>
          <Text style={styles.nameText}>{item?.user_1_full_name}</Text>
          <Icon iconName={iconNames.Eye} style={styles.eyeIcon} />
        </CustomImage>
        <CustomImage
          image={`${URLS.baseUrl}${item?.user_2_photo_link}`}
          marginSize={40}
          containerStyle={styles.secondImageContainer}
          resizeMode={FastImage.resizeMode.cover}>
          <Text style={styles.nameText}>{item?.user_2_full_name}</Text>
          <Icon iconName={iconNames.Eye} style={styles.eyeIcon} />
        </CustomImage>
      </>
    );
  };
  return (
    <Swiper
      ref={swiperRef}
      cardVerticalMargin={10}
      containerStyle={styles.swiperContainer}
      cardStyle={styles.swiperCard}
      verticalSwipe={false}
      renderCard={item => MatchItem(item)}
      cards={matchList ?? []}
      stackSize={2}
      onSwipedRight={() => console.log('Swipe Right')}
      onSwipedLeft={() => console.log('Swipe Left')}
      onSwiped={index => {
        return index === matchList.length - 1 && setSwipeAll(true);
      }}
      animateOverlayLabelsOpacity
      overlayLabels={{
        left: {
          title: 'NOPE',
          style: {
            label: styles.dislikeLabel,
            wrapper: styles.dislikeWrapper,
          },
        },
        right: {
          title: 'LIKE',
          style: {
            label: styles.likeLabel,
            wrapper: styles.likeWrapper,
          },
        },
      }}
    />
  );
}
