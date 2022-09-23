import React from 'react';
import { StyleSheet, Dimensions, FlatList, View } from 'react-native';
import HorizontalList from '../../components/shared/HorizontalList';
import CONSTANTS from '../../store/Constants';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');

const categories = CONSTANTS.CATEGORIES;

const arrayLists = new Array([[]]);

export interface IHomePageProps {

}

for (let i = 0; i < categories.length; i++) {
  arrayLists.push(new Array(categories.length));
}

arrayLists.splice(0, 1);

const HomePage: React.FC<IHomePageProps> = (props: IHomePageProps) => {


  const renderItem = ({ item, index }: any) => {
    return < HorizontalList title={item} item={arrayLists[index]} />
  };

  return (
    <>
      <View style={styles.container} >
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={() => Math.floor(Math.random() * 1000000).toString()}
          directionalLockEnabled
          renderItem={renderItem}
          numColumns={1}
          //maxToRenderPerBatch={6}
          //initialNumToRender={6}
          //onMomentumScrollBegin={onMomentumScrollBegin}
          onEndReachedThreshold={0.3}
          //onEndReached={() => onEndReached(path, recetas[recetas.length - 1].key)}
          getItemLayout={(data, index) => (
            { length: (width / 3 + 32), offset: (width / 3 + 32) * index, index }
          )}
        />
      </View>
    </>
  );
}

export default HomePage;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
});