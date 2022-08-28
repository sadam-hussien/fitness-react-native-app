import React from 'react';

import {View, Animated, StyleSheet, FlatList} from 'react-native';

import {colors, sizes, bestData, challengData} from '@/constants';

import {SectionTitle} from '@/components';

import {Header, BestItem, ChallengeItem} from '../components';

const Explore = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        ListHeaderComponent={() => (
          <View>
            <Header />
            <SectionTitle title="best for yout" />
            <Animated.FlatList
              data={bestData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <BestItem data={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={15}
              decelerationRate="fast"
              snapToInterval={sizes.width - 150}
              contentContainerStyle={{
                paddingLeft: sizes.large,
                marginBottom: sizes.large,
              }}
            />

            <SectionTitle title="challenge" />
            <Animated.FlatList
              data={challengData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ChallengeItem data={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={15}
              decelerationRate="fast"
              snapToInterval={sizes.width / 3}
              contentContainerStyle={{
                paddingLeft: sizes.large,
                marginBottom: sizes.large,
              }}
            />
          </View>
        )}
        renderItem={({item}) => <View></View>}
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
  },
});

export default Explore;
