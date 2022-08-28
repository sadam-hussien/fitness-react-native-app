import React from 'react';

import {View, StyleSheet, Animated, FlatList} from 'react-native';

import {Header, PopularItem, TodayPlanItem} from '../components';

import {SectionTitle} from '@/components';

import {sizes, colors, popularData, todayData} from '@/constants';

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todayData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View>
            <Header />
            <SectionTitle title="popular workouts" />
            <Animated.FlatList
              data={popularData}
              keyExtractor={item => item.id}
              renderItem={({item}) => <PopularItem data={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={15}
              decelerationRate="fast"
              snapToInterval={sizes.width}
              contentContainerStyle={{
                paddingLeft: sizes.large,
                marginBottom: sizes.large,
              }}
            />
            <SectionTitle title="today plan" />
          </View>
        )}
        renderItem={({item}) => <TodayPlanItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.subLight,
    paddingBottom: 80,
  },
});

export default Home;
