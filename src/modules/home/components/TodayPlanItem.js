import React from 'react';

import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {sizes, colors, fonts} from '@/constants';

const TodayPlanItem = ({data}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.status}>{data.status}</Text>
      <View style={styles.imgContainer}>
        <Image source={data.img} style={styles.img} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.subTitle}>{data.subTitle}</Text>
        <View style={styles.precent}>
          <View style={[styles.precentInner, {width: data.precent}]}>
            <Text style={styles.precenttext}>{data.precent}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: sizes.medium,
    marginHorizontal: sizes.large,
    backgroundColor: colors.light,
    padding: sizes.medium,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  status: {
    position: 'absolute',
    top: 0,
    right: sizes.medium,
    backgroundColor: colors.dark,
    color: colors.light,
    paddingHorizontal: sizes.small,
    paddingVertical: sizes.base,
    textTransform: 'capitalize',
    ...fonts.body3,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  imgContainer: {
    marginRight: sizes.medium,
  },
  img: {
    borderRadius: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    ...fonts.h2,
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.base,
  },
  subTitle: {
    color: colors.gray1,
    ...fonts.body2,
    marginBottom: sizes.small,
  },
  precent: {
    backgroundColor: colors.subLight,
    borderRadius: 3,
    height: 16,
  },
  precentInner: {
    backgroundColor: colors.primary,
    borderRadius: 3,
    paddingHorizontal: sizes.small,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  precenttext: {
    ...fonts.body4,
  },
});

export default TodayPlanItem;
