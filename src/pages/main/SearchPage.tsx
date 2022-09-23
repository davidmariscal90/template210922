import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import VerticalList from '../../components/shared/VerticalList';
import CONSTANTS from '../../store/Constants';

const { width } = Dimensions.get('window');

const search = CONSTANTS.SEARCH;

const arrayLists = new Array([[]]);

export interface ISearchPageProps {
}

for (let i = 0; i < search.length; i++) {
    arrayLists.push(new Array(search.length));
}

arrayLists.splice(0, 1);

console.log('arrayListsarrayListsarrayLists', arrayLists);
const SearchPage: React.FC<ISearchPageProps> = (props: ISearchPageProps) => {


    const renderItem = ({ item, index }: any) => {
        return < VerticalList title={item} item={arrayLists[index]} />
    };


    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={search}
            //keyExtractor={() => Math.floor(Math.random() * 10).toString()}
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
    );
}

export default SearchPage;