import React from 'react';

import {colors, fonts, sizes} from '@/constants';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;
  return (
    <View style={[styles.container, {flexGrow: focused ? 2 : 1}]}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.btn,
          {
            backgroundColor: focused ? colors.primary : null,
            paddingHorizontal: focused ? sizes.small : 0,
          },
        ]}>
        <Image
          source={item.icon}
          style={[
            styles.icon,
            {tintColor: focused ? colors.dark : colors.light},
          ]}
        />
        {focused && <Text style={styles.text}>{item.label}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btn: {
    borderRadius: 43,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
  },
  text: {
    marginLeft: sizes.base,
    ...fonts.h3,
    textTransform: 'capitalize',
    color: colors.dark,
  },
});

export default TabButton;
