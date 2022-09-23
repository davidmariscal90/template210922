// import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import TitleLabelForm from '../../components/shared/TitleLabelForm';
import TextInputForm from '../../components/shared/TextInputForm';
import TeemRedButtonForm from '../../components/shared/DendaButtonForm';
import { validationForgotEmailSchema } from '../../components/shared/LoginValidationSchema';
import ActivityLoaderForm from '../../components/shared/ActivityLoaderForm';
import InputValidator from '../../components/shared/InputValidator';
import { StackNavigationProp } from '@react-navigation/stack';

// create a component

export interface IForgotPasswordPageProps {
  navigation: StackNavigationProp<any, any>
}

const ForgotPasswordPage: React.FC<IForgotPasswordPageProps> = (props: IForgotPasswordPageProps) => {
  return (
    <View style={styles.container}>
      <TitleLabelForm label="RECOVERY PASSWORD" />
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
        validationSchema={validationForgotEmailSchema}
      >
        {() => (
          <>
            <TextInputForm
              placeholder="Email"
              autoFocus
            />
            <InputValidator
            />
            <View style={{ height: 24 }} />
            {1 !== 1 ? (
              <ActivityLoaderForm />
            ) : (
              <TeemRedButtonForm text="Enviar" onPress={() => { }} />
            )}
          </>
        )}
      </Formik>
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
export default ForgotPasswordPage;
