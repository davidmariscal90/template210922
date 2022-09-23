import React, { ReactElement } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

interface IProps {

}

const SocialButtonsLogin: React.FC<IProps> = (props: IProps): ReactElement => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.fbButton}>
        <View style={styles.contentButton}>
          <Icon name="sc-facebook" style={styles.googleIcon} size={32} color="#fff" />
          <Text style={styles.signButtonText}>
            Entrar con Facebook
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
};

export default SocialButtonsLogin;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    width: '100%',
    marginTop: 32,
    marginBottom: 8,
  },
  fbButton: {
    backgroundColor: 'rgb(45, 69, 134)',
    borderRadius: 5,
    marginBottom: 24,
    height: 56,
    justifyContent: 'center',
  },
  googleButton: {
    backgroundColor: 'rgb(231, 81, 77)',
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',

  },
  signButtonText: {
    color: '#fff',
    fontSize: 16,
    justifyContent: 'center',
    padding: 8,
  },
  googleIcon: {
    // paddingVertical: 8,
  },
  contentButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});
