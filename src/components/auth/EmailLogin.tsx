import { StackNavigationProp } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';

interface IProps {
  navigation: any
}

const EmailLogin: React.FC<IProps> = (props: IProps): ReactElement => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.signButton, styles.signInButton]} onPress={() => { navigation.navigate('Register') }}>
          <Text style={styles.signButtonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.signButton, styles.signUpButton]} onPress={() => { navigation.navigate('Register') }}>
          <Text style={styles.signButtonText}>
            Crear cuenta
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

export default EmailLogin;

const styles = StyleSheet.create({
  container: {
    //height: 64,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    //paddingLeft: 8,
    //paddingRight: 8,
  },
  buttonContainer: {
    flex: 1,
    //bottom: -24,
  },
  signButton: {
    width: '100%',
    //height: 24,
    justifyContent: 'center',
  },
  signInButton: {
    borderColor: '#fff',
    borderRightWidth: 1,
    //paddingRight: 16,
  },
  signUpButton: {
    borderColor: '#fff',
    borderLeftWidth: 1,
    //paddingLeft: 16,
  },
  signButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
