// import liraries
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// create a component
const ActivityLoaderForm: any = () => (
  <View style={{ paddingVertical: 0 }}>
    <ActivityIndicator size="large" color="#222527" />
  </View>
);

// make this component available to the app
export default ActivityLoaderForm;
