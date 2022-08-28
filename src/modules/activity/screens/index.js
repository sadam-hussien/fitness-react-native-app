import React from 'react';

import {View, StyleSheet, Text, FlatList} from 'react-native';

import {colors, sizes, fonts, analticsData} from '@/constants';

import {SectionTitle} from '@/components';

import {ChallengeItem} from '../components';

const Activity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>hi, mahmoud</Text>
      <SectionTitle title="today report" padding={0} />
      <FlatList
        data={analticsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ChallengeItem data={item} />}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: sizes.medium,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.subLight,
    paddingBottom: 80,
    paddingTop: sizes.large,
    paddingHorizontal: sizes.large,
  },
  title: {
    ...fonts.h1,
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.medium,
  },
});

export default Activity;
