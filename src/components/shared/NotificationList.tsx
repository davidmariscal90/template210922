import React, { ReactElement } from 'react';
import {
    Dimensions, FlatList,
} from 'react-native';
import NotificationLabel from './NotificationLabel';
import NotificationRow from './NotificationRow';

const { width } = Dimensions.get('window');

export interface INotificationListProps {
    title: string;
    item: Array<Object>;
}

const NotificationList: React.FC<INotificationListProps> = (props: INotificationListProps): ReactElement => {

    const { title, item } = props;
    const renderItem = ({ item, index }: any) => {
        return (<NotificationRow item={item} index={index} />);
    };

    return (
        <>
            <NotificationLabel label={title} />
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={item}
                //keyExtractor={() => Math.floor(Math.random() * 1000000).toString()}
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
        </>
    );
};

export default NotificationList;