import React, { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import { StyleSheet } from 'react-native';

export default function ErrorAlert() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title="Server Error"
      message="I have a message for you!"
      closeOnTouchOutside
      closeOnHardwareBackPress={false}
      showConfirmButton
      confirmText="Okey"
      confirmButtonColor="#C80F24"
      titleStyle={{ fontSize: 16 }}
      messageStyle={{ fontSize: 14 }}
      confirmButtonTextStyle={{ fontSize: 12 }}
      onConfirmPressed={() => {
        setShowAlert(false);
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: '#AEDEF4',
  },
  text: {
    color: '#fff',
    fontSize: 15,
  },
});
