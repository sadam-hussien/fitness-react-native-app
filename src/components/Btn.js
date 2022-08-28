import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {sizes, colors, fonts} from '@/constants';

const Btn = ({title, style = {}, titleStyle = {}, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, {...style}]}>
      <Text style={[styles.text, {...titleStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sizes.large,
    backgroundColor: colors.dark,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.light,
    textTransform: 'capitalize',
    ...fonts.h2,
  },
});

export default Btn;
