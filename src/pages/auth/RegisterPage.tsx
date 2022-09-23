// import liraries
import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity, Dimensions,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Formik } from 'formik';
import ActivityLoaderForm from '../../components/shared/ActivityLoaderForm';
import TitleLabelForm from '../../components/shared/TitleLabelForm';
import TextInputForm from '../../components/shared/TextInputForm';
import TeemRedButtonForm from '../../components/shared/DendaButtonForm';
import ForgotPassButton from '../../components/shared/ForgotPassButton';
import { validationSchema } from '../../components/shared/LoginValidationSchema';
import InputValidator from '../../components/shared/InputValidator';
import ErrorAlert from '../../components/shared/ErrorAlert';
import { StackNavigationProp } from '@react-navigation/stack';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');
// create a component

export interface IRegisterPageProps {
  navigation: StackNavigationProp<any, any>

}

const RegisterPage: React.FC<IRegisterPageProps> = (props: IRegisterPageProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TitleLabelForm label="REGISTER" />
      <Formik
        initialValues={{ email: '', password: '', terms: false }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationSchema}
      >
        {() => (<View style={{ alignItems: 'center' }}>
          <TextInputForm
            placeholder="Email"
            autoFocus
          />
          <InputValidator
          />
          <TextInputForm
            placeholder="Password"
            secureTextEntry
          />
          <InputValidator
          />
          <View style={styles.conditionsView}>
            <CheckBox
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              size={18}
              checkedColor="#222527"
              uncheckedColor="#222527"
              containerStyle={{ margin: 0, padding: 0 }}
            />
            <Text style={styles.termsAndConditions}>I´m agree with </Text>
            <TouchableOpacity style={styles.termsButton}>
              <Text style={styles.termsText}>Terms and conditions</Text>
            </TouchableOpacity>
          </View>
          <InputValidator
          />
          <View style={{ height: 24 }} />
          {1 !== 1 ? (
            <ActivityLoaderForm />
          ) : (
            <TeemRedButtonForm text="Register" onPress={() => { }} />
          )}
        </View>)}
      </Formik>
      <ForgotPassButton navigation={navigation} />
      <ErrorAlert />
    </View>
  )

}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
  termsAndConditions: {
    color: '#222527',
    
    fontSize: 14,
  },
  termsButton: {
  },
  termsText: {
    color: COLORS.PRIMARY,
    
    fontWeight: '600',
    fontSize: 14,
  },
  conditionsView: {
    flexDirection: 'row',
    paddingVertical: 16,
    paddingLeft: 4,
    paddingRight: 16,
    backgroundColor: '#fff',
    width,
    borderBottomWidth: 0.5,
    borderBottomColor: '#7c858a',
  },
});

// make this component available to the app
export default RegisterPage;




