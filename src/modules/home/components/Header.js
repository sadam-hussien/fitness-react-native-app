import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, Image} from 'react-native';

import {sizes, colors, fonts, icons} from '@/constants';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleChange = value => {
    setSearch(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>good morning</Text>
      <Text style={styles.title}>mahmoud hussien</Text>
      <View style={styles.inputGroup}>
        <Image source={icons.iconSearch} style={styles.icon} />
        <TextInput
          value={search}
          onChangeText={handleChange}
          placeholder="Search"
          placeholderTextColor={colors.gray1}
          blurOnSubmit
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: sizes.large,
  },
  subTitle: {
    ...fonts.h3,
    color: colors.dark,
    textTransform: 'capitalize',
    marginBottom: sizes.base,
  },
  title: {
    ...fonts.h1,
    color: colors.dark,
    textTransform: 'capitalize',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.light,
    marginTop: sizes.medium,
    borderRadius: 12,
    height: 58,
    paddingLeft: sizes.small,
  },
  input: {
    marginLeft: sizes.base,
    color: colors.dark,
    height: '100%',
    flex: 1,
  },
});

export default Header;
