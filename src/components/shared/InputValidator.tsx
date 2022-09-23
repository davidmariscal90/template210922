import React from 'react';
import { View, Text } from 'react-native';

const InputValidator = (props: any) => {
  return (
    <View>
      {props.touched && props.errors
        ? (
          <Text style={{
            color: '#d2232a',  fontSize: 14, padding: 16,
          }}
          >
            {props.touched && props.errors}
          </Text>
        ) : null}
    </View>
  );
}

export default InputValidator;