import React, { ReactElement } from 'react';
import {
    StyleSheet, Dimensions, FlatList,
} from 'react-native';
import ArticleItem from './listsItems/ArticleItem';
import ItemList from './listsItems/ItemList';
import ItemVideoList from './listsItems/ItemVideoList';
import PodcastItem from './listsItems/PodcastItem';

const { width } = Dimensions.get('window');

export interface IVerticalListContainerProps {
    title: string;
    item: Array<Object>;
}

const VerticalListContainer: React.FC<IVerticalListContainerProps> = (props: IVerticalListContainerProps): ReactElement => {

    const { title, item } = props;
    const renderItem = ({ index }: any) => {
        return title === 'Noticias' ? <ArticleItem /> : (title === 'Podcasts' ? <PodcastItem index={index} /> : (title === 'Videos' ? <ItemVideoList /> : <ItemList width={(width / 3) - 10} />))
    };

    return (
        <>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                //keyExtractor={() => Math.floor(Math.random() * 1000000).toString()}
                renderItem={renderItem}
                numColumns={3}
                //maxToRenderPerBatch={6}
                //initialNumToRender={6}
                //onMomentumScrollBegin={onMomentumScrollBegin}
                onEndReachedThreshold={0.3}
                //onEndReached={() => onEndReached(path, recetas[recetas.length - 1].key)}
                getItemLayout={(data, index) => (
                    { length: (width / 3 + 32), offset: (width / 3 + 32) * index, index }
                )}
            />
        </>
    );
};

export default VerticalListContainer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 8,
        // height: 196,
    },
    line: {
        backgroundColor: '#fafafa',
        width: width - 32,
        // height: 1,
        marginTop: 16,
    },
});