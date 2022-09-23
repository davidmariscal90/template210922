import React, { ReactElement } from 'react';
import {
    StyleSheet, Dimensions, View, FlatList, ActivityIndicator,
} from 'react-native';
import COLORS from '../../styles/theme';
import ArticleItem from './listsItems/ArticleItem';
import ItemList from './listsItems/ItemList';
import ItemVideoList from './listsItems/ItemVideoList';
import PodcastItem from './listsItems/PodcastItem';

const { width } = Dimensions.get('window');

export interface IHorizontalListContainerProps {
    title: string;
    item: Array<Object>;
}

var widthLoading: number = (width / 4) - 10;

const HorizontalListContainer: React.FC<IHorizontalListContainerProps> = (props: IHorizontalListContainerProps): ReactElement => {

    const { title, item } = props;

    widthLoading = (title === 'Friends' ? (width / 4) - 10 : (width / 3) - 10);

    const renderItem = ({ index }: any) => {
        return title === 'Noticias más interesantes' ? <ArticleItem />
            : (title === 'Podcasts más escuchados' ? <PodcastItem index={index} />
                : (title === 'Vídeo recetas navideñas' ? <ItemVideoList />
                    : (title === 'Friends' ? <ItemList width={(width / 4) - 10} /> : <ItemList width={(width / 3) - 10} />)))
    };

    const renderFooter = () => (
        <View style={styles.containerMoreLoading}>
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
        </View>
    );

    return (
        <>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={item}
                keyExtractor={() => Math.floor(Math.random() * 1000000).toString()}
                renderItem={renderItem}
                numColumns={1}
                ListFooterComponent={renderFooter}
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

export default HorizontalListContainer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 8,
        // height: 196,
    },
    containerMoreLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        width: widthLoading,
        height: widthLoading,
        backgroundColor: COLORS.WHITE,
        borderRadius: 8,
        marginTop: 16,
        marginHorizontal: 5,
        borderColor: COLORS.WHITE,
    },
    line: {
        backgroundColor: '#fafafa',
        width: width - 32,
        // height: 1,
        marginTop: 16,
    },
});