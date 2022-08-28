import React from 'react';

import {View, StyleSheet, Text} from 'react-native';

import {sizes, colors, fonts} from '@/constants';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profile}>profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.subLight,
    paddingBottom: 80,
    paddingHorizontal: sizes.large,
    paddingTop: sizes.large,
  },
  img: {
    tintColor: colors.dark,
    width: 300,
    height: 300,
  },
  profile: {
    ...fonts.h1,
    color: colors.dark,
    textTransform: 'capitalize',
  },
});

export default Profile;
