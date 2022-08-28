import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {sizes, fonts, colors} from '@/constants';

const SectionTitle = ({title, padding}) => {
  return (
    <View
      style={[
        styles.container,
        {paddingHorizontal: padding !== undefined ? padding : sizes.large},
      ]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...fonts.h2,
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.small,
  },
});

export default SectionTitle;
