import React, { ReactElement } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../styles/theme';
interface IProps {
  title: string
}

const HeaderTitle = (props: IProps): ReactElement => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 16,
    color: COLORS.WHITE
  },
});