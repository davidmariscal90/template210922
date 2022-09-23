import React, { ReactElement } from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Dimensions, View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import IMAGES from '../../../store/Images';

const { width } = Dimensions.get('window');

interface IProps {
  index: number
}

const PodcastItem: React.FC<IProps> = (props: IProps): ReactElement => {
  const { index } = props;
  return (
    <TouchableOpacity style={[styles.container,
    index % 3 === 0 ? styles.podcastBlue : index % 3 === 1 ?
      styles.podcastGreen : index % 3 === 2 ?
        styles.podcastYellow : null]}
    >
      <Text style={styles.usernameText}>Nombre Apellido</Text>
      <Text
        style={styles.podcastTitle}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        Podcast Title
      </Text>
      <TouchableOpacity style={styles.playButton} >
        {
          1 === 1
            ? (
              <FastImage
                source={index % 3 === 0 ? IMAGES.BLUE_PLAY : index % 3 === 1 ?
                  IMAGES.GREEN_PLAY : index % 3 === 2 ?
                    IMAGES.YELLOW_PLAY : null}
                style={styles.playerImage}
              />
            ) : (
              <FastImage
                source={index % 3 === 0 ? IMAGES.BLUE_PAUSE : index % 3 === 1 ?
                  IMAGES.GREEN_PAUSE : index % 3 === 2 ?
                    IMAGES.YELLOW_PAUSE : null}
                style={styles.playerImage}
              />
            )
        }
      </TouchableOpacity>
      <View>
        <Text style={styles.durationText}>23:00</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PodcastItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    borderRadius: 12,
    width: width / 2.5 - 10,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  podcastBlue: {
    backgroundColor: 'rgba(225, 235, 245, 0.5)',
    color: 'rgba(225, 235, 245, 0.2)',
  },
  podcastGreen: {
    backgroundColor: 'rgba(230, 235, 218, 0.5)',
    color: 'rgba(230, 235, 218, 0.2)',
  },
  podcastYellow: {
    backgroundColor: 'rgba(253, 250, 234, 0.5)',
    color: 'rgba(253, 250, 234, 0.2)',
  },
  playButton: {
    borderColor: '#fff',
    borderRadius: 28,
    marginTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
  },
  playerImage: {
    width: 56,
    height: 56,
  },
  podcastTitle: {
    color: '#666666',
    fontSize: 10,
    
    marginTop: 0,
    marginBottom: 8,
    marginHorizontal: 6,
    textAlign: 'center',
  },
  podcastBuscador: {
    borderRadius: 12,
    width: width / 3 + 4,
    // height: 184,
    marginHorizontal: 8,
    marginVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  durationText: {
    marginTop: 16,
    marginBottom: 20,
    color: '#666666',
    fontSize: 12,
    
  },
  usernameText: {
    color: '#232323',
    fontSize: 12,
    
    marginTop: 16,
    marginBottom: 10,
  },

});
