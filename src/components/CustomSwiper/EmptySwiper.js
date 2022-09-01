import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import styles from './styles';

export default function EmptySwiper({refresh, loading}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emptyListDescription}>
        {`Yakıştırılacak başka çift kalmadı.\nDaha çok arkadaşına Mevzu'dan bahsetmelisin :)`}
      </Text>
      <TouchableOpacity style={styles.refreshButton} onPress={refresh}>
        {loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <Text>Yenile</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
