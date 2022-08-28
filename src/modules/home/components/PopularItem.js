import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

import {sizes, icons, fonts, colors} from '@/constants';

const PopularItem = ({data}) => {
  return (
    <ImageBackground
      source={data.img}
      imageStyle={{borderRadius: 15}}
      style={styles.container}
      resizeMode="cover">
      <View style={styles.overlay}></View>
      <View style={styles.info}>
        <Text style={styles.title}>{data.title}</Text>
        <Details title={data.kol} icon={icons.iconFire} />
        <Details title={data.time} icon={icons.iconClock} />
      </View>
      <TouchableOpacity style={styles.video}>
        <Image source={icons.iconPlay} style={styles.iconPlay} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

function Details({title, icon}) {
  return (
    <View style={styles.details}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.detailsText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: sizes.width - 100,
    marginRight: sizes.large,
    minHeight: 230,
    position: 'relative',
    padding: sizes.large,
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 15,
    backgroundColor: 'rgba(0 , 0, 0 , .3)',
  },
  info: {
    width: '70%',
  },
  title: {
    ...fonts.h1,
    color: colors.light,
    textTransform: 'capitalize',
    lineHeight: 30,
    marginBottom: sizes.medium,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes.base,
    backgroundColor: colors.light,
    marginBottom: sizes.small,
    height: 30,
    width: 100,
    borderRadius: 35,
  },
  detailsText: {
    ...fonts.body2,
    color: colors.dark,
    textTransform: 'capitalize',
    marginLeft: sizes.base,
  },
  video: {
    position: 'absolute',
    top: '50%',
    right: sizes.large,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
  },
  iconPlay: {
    tintColor: colors.dark,
    width: 16,
    height: 16,
  },
});

export default PopularItem;
