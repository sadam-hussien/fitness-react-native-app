import React from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

import {images, colors, sizes, fonts} from '@/constants';

const Header = () => {
  return (
    <ImageBackground
      source={images.explore}
      imageStyle={{borderRadius: 15}}
      style={styles.container}
      resizeMode="cover">
      <View style={styles.overlay}></View>
      <Text style={styles.title}>Best Quarantine Workout</Text>

      <TouchableOpacity style={styles.more}>
        <Text style={styles.text}>see more</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.large,
    height: 200,
    position: 'relative',
    padding: sizes.large,
    justifyContent: 'space-between',
    marginBottom: sizes.large,
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
  title: {
    width: '70%',
    ...fonts.h1,
    color: colors.light,
  },
  text: {
    color: colors.primary,
    ...fonts.h3,
    textTransform: 'capitalize',
  },
});

export default Header;
