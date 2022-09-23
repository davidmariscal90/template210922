// import liraries
import React from 'react';
import { TextInput, StyleSheet, Dimensions } from 'react-native';
import { IRegisterPageProps } from '../../pages/auth/RegisterPage';

const { width } = Dimensions.get('window');

// create a component
const TextInputForm = (props:any) => (
  <TextInput
    placeholder={props.placeholder}
    style={styles.textInputForm}
    onChangeText={props.onChangeText}
    onBlur={props.onBlur}
    secureTextEntry={props.secureTextEntry}
    placeholderTextColor="#222527"
  />
);

// define your styles
const styles = StyleSheet.create({
  textInputForm: {
    width,
    backgroundColor: '#fff',
    padding: 16,
    color: '#99a3a9',
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#7c858a',
    
  },
});

// make this component available to the app
export default TextInputForm;
