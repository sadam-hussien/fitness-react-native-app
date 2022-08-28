import React from 'react';

import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {sizes, colors, fonts} from '@/constants';

const BestItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={data.img} style={styles.img} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.contentFooter}>
          <Text style={styles.subInfo}>{data.time}</Text>
          <Text style={styles.subInfo}>{data.status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: sizes.width - 150,
    marginRight: sizes.large,
    position: 'relative',
    padding: sizes.small,
    backgroundColor: colors.light,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgContainer: {
    marginRight: sizes.medium,
  },
  img: {
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  title: {
    ...fonts.h3,
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.small,
  },
  contentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subInfo: {
    color: colors.gray1,
    ...fonts.body1,
    textTransform: 'capitalize',
  },
});

export default BestItem;
