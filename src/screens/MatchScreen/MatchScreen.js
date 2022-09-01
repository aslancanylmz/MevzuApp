import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-deck-swiper';
import {CustomImage} from '../../components/CustomImage/CustomImage';
import {Icon, iconNames} from '../../components/icon/icon';
import {URLS} from '../../constants/appConstants';
import {COLORS, SIZES} from '../../constants/theme';
import styles from './styles';
import CustomSwiper from '../../components/CustomSwiper/CustomSwiper';
import EmptySwiper from '../../components/CustomSwiper/EmptySwiper';
import LikeDislikeButtons from '../../components/LikeDislikeButtons/LikeDislikeButtons';
import {getMatchList} from '../../services/API/apis';

const MatchScreen = () => {
  const [swipeAll, setSwipeAll] = useState(false);
  const [error, setError] = useState(false);
  const [matchList, setMatchList] = useState(false);
  const [loading, setLoading] = useState(false);

  const swiperRef = useRef();

  const getMatchListRequest = async () => {
    setLoading(true);
    const res = await getMatchList();

    if (res.result) {
      setMatchList(res.data);
      setLoading(false);
      setError(false);
      setSwipeAll(false);
    } else {
      setMatchList(null);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getMatchListRequest();
  }, [swipeAll]);

  if (error)
    return (
      <EmptySwiper refresh={() => getMatchListRequest()} loading={loading} />
    );

  if (loading && !error)
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <CustomSwiper
        matchList={matchList}
        setSwipeAll={setSwipeAll}
        swiperRef={swiperRef}
      />
      <LikeDislikeButtons
        likeButtonPress={() => swiperRef.current.swipeRight()}
        dislikeButtonPress={() => swiperRef.current.swipeLeft()}
      />
    </SafeAreaView>
  );
};

export default MatchScreen;
