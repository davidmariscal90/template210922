import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
//import { LoginRequest, userLoginWithEmail } from '../../actions/userActions'
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
/**import firestore from '@react-native-firebase/firestore';
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { userAction } from '../../store/reducers/userReducer'*/
import { navigation } from '../../navigation/rootNavigation'
import EmailLogin from '../../components/auth/EmailLogin';
import SocialButtonsLogin from '../../components/auth/SocialButtonsLogin';
import IMAGES from '../../store/Images';
import styles from '../../pages/auth/style/LoginStyle';

export interface ILoginPageProps {
  navigation:{
    navigate: void,
    dispatch: void,
    replace: void,
    push: void,
    goBack: void
}
}

const LoginPage: React.FC<ILoginPageProps> = (props: ILoginPageProps): JSX.Element => {

  /**const dispatch = useDispatch()
  const [loading, setLoading] = useState<boolean>(false)
  const [hidePassword, sethidePassword] = useState(true)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [allowLogin, setallowLogin] = useState(false)
  const _loadingDeg = new Animated.Value(0)
  const _animationLoadingDeg = () => {
      Animated.timing(_loadingDeg, {
          useNativeDriver: true,
          toValue: 1,
          duration: 400
      }).start(() => {
          _loadingDeg.setValue(0)
          if (loading) _animationLoadingDeg()
      })
  }
  const {
      _onChangeUsername,
      _onChangePassword,
      _onPressToggleHidePassword,
      _onLogin,
      _onPressRegister } = getEventHandlers(
          sethidePassword,
          hidePassword, password, setallowLogin,
          setUsername, username, setPassword, setLoading, dispatch)*/

  return (
    <ImageBackground
      source={IMAGES.GRADIENT}
      style={styles.imageBackground}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerLogoView}>
          <Image style={styles.logoImage} source={IMAGES.DENDA_WHITE_LOGO} />
        </View>
        <Text style={styles.textWelcome}>
          ¿Eres nuevo? Regístrate ahora
          {' '}
          {'\n'}
          ¡Son sólo unos segundos!
        </Text>
        <SocialButtonsLogin />
        <Text style={styles.textEmail}>
          o registrate con tu email si lo prefieres
        </Text>
        <EmailLogin navigation={navigation} />
      </SafeAreaView>
    </ImageBackground>
  );

}

export default LoginPage;



/**function getEventHandlers(
  sethidePassword: React.Dispatch<React.SetStateAction<boolean>>,
  hidePassword: boolean,
  password: string,
  setallowLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setUsername: React.Dispatch<React.SetStateAction<string>>,
  username: string,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: ThunkDispatch<{}, {}, userAction>) {
  const _onPressToggleHidePassword = (): void => {
      sethidePassword(!hidePassword)
  }
  const _onChangeUsername = (text: string): void => {
      allowLoginCheck(text, password, setallowLogin)
      setUsername(text)
  }
  const _onChangePassword = (text: string): void => {
      allowLoginCheck(username, text, setallowLogin)
      setPassword(text)
  }
  const _onPressRegister = (): void => {
      navigation.navigate('Register')
  }
  const _onLogin = async () => {
      setLoading(true)
      let email = ''
      await yup.string().required().email().validate(username).then(async re => {
          email = username
      }).catch(async err => {
          const result = await firestore().collection('users')
              .where('username', '==', username).get()
          if (result.docs.length > 0) {
              email = result.docs[0].data().email
          }
      })
      const loginData: userLoginWithEmail = {
          email: email,
          password,
      }
      await dispatch(LoginRequest(loginData))
      setLoading(false)
  }
  return {
      _onChangeUsername, _onChangePassword,
      _onPressToggleHidePassword, _onLogin, _onPressRegister
  }
}

function allowLoginCheck(
  username: string,
  password: string,
  setallowLogin: React.Dispatch<React.SetStateAction<boolean>>) {
  if (username.length > 0 && password.length > 0)
      setallowLogin(true)
  else
      setallowLogin(false)
}*/

