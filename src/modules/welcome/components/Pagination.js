import React from 'react';

import {View, StyleSheet, Animated} from 'react-native';

import {sizes, colors} from '@/constants';

const Pagination = ({items, scrollX}) => {
  const dotPosition = Animated.divide(scrollX, sizes.width);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {items.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['transparent', colors.primary, 'transparent'],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={[styles.pagItem, {backgroundColor: dotColor}]}
              key={`dot-${index}`}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: sizes.large,
    marginBottom: sizes.large * 2,
  },
  inner: {
    backgroundColor: colors.dark,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    height: 8,
    paddingHorizontal: 1,
  },
  pagItem: {
    width: 30,
    height: 6,
    borderRadius: 6,
  },
});

export default Pagination;
