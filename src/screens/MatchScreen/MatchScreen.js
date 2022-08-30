import React, {useEffect, useRef, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-deck-swiper';
import {CustomImage} from '../../components/CustomImage/image';
import {Icon, iconNames} from '../../components/icon/icon';
import {URLS} from '../../constants/appConstants';
import {COLORS, SIZES} from '../../constants/theme';
import styles from './styles';

const mockData = {
  meta_data: [
    {
      id: 48,
      user_1_full_name: 'Toprak Çağlayan',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/toprak_%C3%A7a%C4%9Flayan.webp',
      user_2_full_name: 'оля',
      user_2_age: null,
      user_2_photo_link: '/media/temp/%D0%BE%D0%BB%D1%8F.webp',
      status: 'pending',
      limit: null,
      positive_answer: 8,
      negative_answer: 16,
      updated_at: '2022-05-23T15:45:18.268467',
      created_at: '2022-05-08T14:40:39.219921',
    },
    {
      id: 25,
      user_1_full_name: 'Emrullah',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/emrullah.webp',
      user_2_full_name: 'Ceylan',
      user_2_age: null,
      user_2_photo_link: '/media/temp/ceylan.webp',
      status: 'pending',
      limit: null,
      positive_answer: 9,
      negative_answer: 8,
      updated_at: '2022-05-17T08:11:57.408658',
      created_at: '2022-05-08T14:38:07.935072',
    },
    {
      id: 19,
      user_1_full_name: 'Batuhan',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/batuhan.webp',
      user_2_full_name: 'Betüş',
      user_2_age: null,
      user_2_photo_link: '/media/temp/Bet%C3%BC%C5%9F.webp',
      status: 'pending',
      limit: null,
      positive_answer: 12,
      negative_answer: 3,
      updated_at: '2022-05-23T15:46:11.528556',
      created_at: '2022-05-08T14:37:30.443902',
    },
    {
      id: 31,
      user_1_full_name: 'Murat',
      user_1_age: null,
      user_1_photo_link: '/media/temp/Murat.webp',
      user_2_full_name: 'Ece',
      user_2_age: null,
      user_2_photo_link: '/media/temp/ece2.webp',
      status: 'pending',
      limit: null,
      positive_answer: 14,
      negative_answer: 9,
      updated_at: '2022-05-24T02:58:38.125975',
      created_at: '2022-05-08T14:38:53.188723',
    },
    {
      id: 47,
      user_1_full_name: 'Tarık',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/tar%C4%B1k.webp',
      user_2_full_name: 'Yağmur',
      user_2_age: null,
      user_2_photo_link: '/media/temp/yagmur6.webp',
      status: 'pending',
      limit: null,
      positive_answer: 9,
      negative_answer: 8,
      updated_at: '2022-05-23T15:46:04.088042',
      created_at: '2022-05-08T14:40:33.091341',
    },
    {
      id: 59,
      user_1_full_name: 'Umut',
      user_1_age: null,
      user_1_photo_link: '/media/temp/umur_QpYT63p.webp',
      user_2_full_name: 'Serenay',
      user_2_age: null,
      user_2_photo_link: '/media/temp/serenay-sarikaya-500x500_B8wczc3.webp',
      status: 'completed',
      limit: null,
      positive_answer: 20,
      negative_answer: 35,
      updated_at: '2022-08-25T13:31:04.687718',
      created_at: '2022-05-26T14:56:33.701573',
    },
    {
      id: 40,
      user_1_full_name: 'Murat',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/murat2.webp',
      user_2_full_name: 'Merve',
      user_2_age: null,
      user_2_photo_link: '/media/temp/merve.webp',
      status: 'pending',
      limit: null,
      positive_answer: 10,
      negative_answer: 7,
      updated_at: '2022-05-23T15:45:34.780140',
      created_at: '2022-05-08T14:39:46.433228',
    },
    {
      id: 15,
      user_1_full_name: 'Ali',
      user_1_age: 18,
      user_1_photo_link: '/media/temp/ali.webp',
      user_2_full_name: 'Armin',
      user_2_age: 18,
      user_2_photo_link: '/media/temp/Armin.webp',
      status: 'pending',
      limit: null,
      positive_answer: 12,
      negative_answer: 12,
      updated_at: '2022-05-25T20:03:41.966090',
      created_at: '2022-05-08T14:37:00.412255',
    },
  ],
  is_err: false,
  err_mes: null,
};

const MatchScreen = () => {
  const [visibleMetaData, setVisibleMetaData] = useState([]);
  const [swipeAll, setSwipeAll] = useState(false);
  const swiperRef = useRef();

  useEffect(() => {
    setVisibleMetaData(mockData.meta_data);
  }, []);

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
    <>
      {swipeAll ? (
        <SafeAreaView>
          <Text style={styles.emptyListDescription}>
            {`Yakıştırılacak başka çift kalmadı.\nDaha çok arkadaşına Mevzu'dan bahsetmelisin :)`}
          </Text>
        </SafeAreaView>
      ) : (
        <Swiper
          ref={swiperRef}
          containerStyle={{backgroundColor: COLORS.white}}
          cardStyle={{backgroundColor: COLORS.white}}
          renderCard={item => MatchItem(item)}
          cards={visibleMetaData}
          stackSize={2}
          onSwipedRight={() => console.log('Swipe Right')}
          onSwipedLeft={() => console.log('Swipe Left')}
          onSwiped={index => {
            return index === visibleMetaData.length - 1 && setSwipeAll(true);
          }}
          animateOverlayLabelsOpacity
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: 'red',
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 3,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 10,
                  marginLeft: -10,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'green',
                  borderColor: 'white',
                  color: 'white',
                  borderWidth: 3,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      )}
    </>
  );
};

export default MatchScreen;
