// import liraries
import React from 'react';
import {
  View, StyleSheet,
} from 'react-native';
import { Formik } from 'formik';
import TitleLabelForm from '../../components/shared/TitleLabelForm';
import TextInputForm from '../../components/shared/TextInputForm';
import TeemRedButtonForm from '../../components/shared/DendaButtonForm';
import InputValidator from '../../components/shared/InputValidator';
import ForgotPassButton from '../../components/shared/ForgotPassButton';
import { sigInValidationSchema } from '../../components/shared/LoginValidationSchema';
import ActivityLoaderForm from '../../components/shared/ActivityLoaderForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

// create a component


export interface ISignInPageProps {
  navigation: StackNavigationProp<any, any>
}

const SignInPage: React.FC<ISignInPageProps> = (props: ISignInPageProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TitleLabelForm label="LOGIN" />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={sigInValidationSchema}
      >
        {() => (
          <>
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
            <View style={{ height: 24 }} />
            {1 !== 1 ? (
              <ActivityLoaderForm />
            ) : (
              <TeemRedButtonForm text="Login" />
            )}
          </>
        )}
      </Formik>
      <ForgotPassButton navigation={navigation} />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
  },
});

// make this component available to the app
export default SignInPage;
