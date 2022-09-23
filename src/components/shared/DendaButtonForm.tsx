// import liraries
import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Dimensions, GestureResponderEvent
} from 'react-native';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');

// create a component
export interface IProps {
  onPress: (event: GestureResponderEvent) => void,
  text: string
}

const DendaButtonForm: React.FC<IProps> = (props: IProps) => {
  // create a component
  const { onPress } = props;
  return (
    <TouchableOpacity style={styles.inputButton} onPress={onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  inputButton: {
    width: width - 32,
    paddingVertical: 16,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

// make this component available to the app
export default DendaButtonForm;
