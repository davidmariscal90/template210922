import React, { ReactElement } from 'react';
import {
  TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import IMAGES from '../../../store/Images';

const { width } = Dimensions.get('window');

export interface ItemProps {
}

const ItemVideoList: React.FC<ItemProps> = (props: ItemProps): ReactElement => {
  return (
    <TouchableOpacity>
      <FastImage
        style={styles.recipeImage}
        source={IMAGES.RECIPE02}
      />
      <TouchableOpacity style={styles.playerButton}>
        <Icon name="play" size={20} color="#fff" style={{ paddingLeft: 4 }} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ItemVideoList;

const styles = StyleSheet.create({
  recipeImage: {
    width: width / 3 - 10,
    height: width / 3 - 10,
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 5,
    borderColor: '#fff',
  },
  playerButton: {
    position: 'absolute',
    bottom: width / 6 - 32,
    left: width / 6 - 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: 'rgba(125,125,125,0.1)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 4,
  },
});
