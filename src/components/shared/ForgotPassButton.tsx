// import liraries
import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// create a component


interface IProps {
  navigation: StackNavigationProp<any, any>
}

const ForgotPassButton: React.FC<IProps> = (props: IProps): ReactElement => {
  const { navigation } = props;
  return (
    <TouchableOpacity style={styles.forgotPassView} onPress={() => { navigation.push('ForgotPasswordScreen'); }}>
      <Text style={styles.forgotPassText}>Forgot Password?</Text>
    </TouchableOpacity>
  );
}

// define your styles
const styles = StyleSheet.create({
  forgotPassText: {
    
    fontSize: 14,
  },
  forgotPassView: {
    marginVertical: 16,
  },
});

// make this component available to the app
export default ForgotPassButton;
