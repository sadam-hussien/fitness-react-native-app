import React, {useRef} from 'react';

import {View, StyleSheet, Animated} from 'react-native';

import {welcomeData, sizes, colors} from '@/constants';

import {Btn} from '@/components';

import {Pagination, WelcomeItem} from '../components';

const Welcome = ({navigation}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={welcomeData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <WelcomeItem data={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={15}
        snapToInterval={sizes.width}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
      />
      <Pagination items={welcomeData} scrollX={scrollX} />
      <Btn title="get started" onPress={() => navigation.navigate('TabNav')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: sizes.large,
    backgroundColor: colors.light,
  },
});

export default Welcome;
