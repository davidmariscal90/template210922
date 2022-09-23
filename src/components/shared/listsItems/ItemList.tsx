import React, { ReactElement } from 'react';
import {
  TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IMAGES from '../../../store/Images';

export interface ItemProps {
  width: number,
}

const ItemList: React.FC<ItemProps> = (props: ItemProps): ReactElement => {

  const { width } = props;

  const itemImage = {
    width: width,
    height: width,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 5,
    borderColor: '#fff',
  }

  return (
    <TouchableOpacity>
      <FastImage
        style={itemImage}
        source={IMAGES.RECIPE01}
      />
    </TouchableOpacity>
  );
};

export default ItemList;


