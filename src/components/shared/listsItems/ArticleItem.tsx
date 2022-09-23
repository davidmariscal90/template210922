import React, { ReactElement } from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Dimensions, View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IMAGES from '../../../store/Images';
import COLORS from '../../../styles/theme';

const { width } = Dimensions.get('window');

interface IProps {

}

const ArticleItem: React.FC<IProps> = (props: IProps): ReactElement => {

  return (
    <TouchableOpacity
      style={styles.container} >
      <View style={styles.containerView}
      >
        <Text
          style={styles.articleText}
          numberOfLines={5}
          ellipsizeMode="tail"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
      <FastImage
        style={styles.image}
        source={IMAGES.RECIPE01}
      />
      <Text style={styles.articleTitle}>Article title</Text>
    </TouchableOpacity>
  );
};

export default ArticleItem;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    width: width / 3 + 4,
    // height: 184,
    paddingTop: 8,
    marginHorizontal: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    shadowRadius: 8,
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.15,
  },
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  articleTitle: {
    color: '#232323',
    fontSize: 12,
    
    marginTop: 8,
    marginBottom: 12,
  },
  articleText: {
    color: '#666666',
    fontSize: 11,
    
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 4,
  },
});
