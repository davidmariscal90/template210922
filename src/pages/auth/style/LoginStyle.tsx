
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  /** LOGIN PAGE JS */
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderColor: '#fff',
    paddingHorizontal: 16,
  },
  headerLogoView: {
    flex: 0,
    marginTop: 64,
    marginBottom: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 200,
    height: 68,
  },
  textWelcome: {
    lineHeight: 23,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 24,
    
  },
  textEmail: {
    lineHeight: 23,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    bottom: 16,
    
  },
  imageBackground: {
    width, height,
  },



});

export default styles;
