import React from 'react';
import { StyleSheet, Dimensions, FlatList, View } from 'react-native';
import NotificationList from '../../components/shared/NotificationList';
import CONSTANTS from '../../store/Constants';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');

const categories = CONSTANTS.NOTIFICATION_DAYS;

const arrayLists = new Array([[]]);

export interface INotificationPageProps {

}

for (let i = 0; i < categories.length; i++) {
    arrayLists.push(new Array(categories.length));
}

arrayLists.splice(0, 1);

const NotificationPage: React.FC<INotificationPageProps> = (props: INotificationPageProps) => {


    const renderItem = ({ item, index }: any) => {
        return < NotificationList title={item} item={arrayLists[index]} />
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

export default NotificationPage;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
});