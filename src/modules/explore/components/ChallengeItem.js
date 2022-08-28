import React from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';

import {sizes, colors, fonts} from '@/constants';

const ChallengeItem = ({data}) => {
  return (
    <View style={[styles.container, {backgroundColor: data.backgroundColor}]}>
      <View style={styles.img}>
        <Image source={data.img} />
      </View>
      <Text style={[styles.text, {color: data.color}]}>{data.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizes.width / 3,
    marginRight: sizes.large,
    position: 'relative',
    padding: sizes.small,
    backgroundColor: colors.light,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
  },
  img: {
    position: 'absolute',
    bottom: 0,
    right: sizes.small,
  },
  text: {
    ...fonts.h2,
  },
});

export default ChallengeItem;
