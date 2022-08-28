import React from 'react';

import {View, StyleSheet, Text, Image} from 'react-native';

import {sizes, fonts, colors} from '@/constants';

const ChallengeItem = ({data}) => {
  return (
    <View style={[styles.container, {backgroundColor: data.backgroundColor}]}>
      <Text style={styles.title}>{data.title}</Text>

      {data.img && (
        <View style={styles.imgOuter}>
          <Image source={data.img} style={styles.img} />
        </View>
      )}
      {data.response && <Text style={styles.response}>{data.response}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100 / 2 - 3 + '%',
    padding: sizes.small,
    borderRadius: 8,
  },
  title: {
    ...fonts.h3,
    color: colors.dark,
    marginBottom: sizes.small,
    textTransform: 'capitalize',
  },
  imgOuter: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: sizes.medium,
  },
  response: {
    textAlign: 'right',
    ...fonts.h3,
    color: colors.dark,
  },
});

export default ChallengeItem;
