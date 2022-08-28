import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

import {sizes, images, fonts, colors} from '@/constants';

const WelcomeItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgs}>
        <Image source={data.img} style={styles.img} resizeMode="cover" />
        <Image source={images.welcomeOverlay} style={styles.overlayImg} />
      </View>
      <View style={styles.itemInfo}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subTitle}>{data.subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizes.width,
    flex: 1,
    justifyContent: 'space-between',
  },
  imgs: {
    flex: 1,
    position: 'relative',
  },
  img: {
    flex: 1,
    borderStartColor: 'red',
    width: '100%',
  },
  overlayImg: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
  },
  itemInfo: {
    marginTop: sizes.large,
    paddingHorizontal: sizes.large + 40,
  },
  title: {
    ...fonts.h1,
    textAlign: 'center',
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.medium,
  },
  subTitle: {
    ...fonts.body1,
    color: colors.gray3,
    textAlign: 'center',
  },
});

export default WelcomeItem;
