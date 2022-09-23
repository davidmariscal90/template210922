import React, { ReactElement } from 'react';
import {
    StyleSheet, Dimensions, View,
} from 'react-native';
import { Text } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import IMAGES from '../../store/Images';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');

export interface INotificationRowProps {
    item: Object,
    index: number
}

const NotificationRow: React.FC<INotificationRowProps> = (props: INotificationRowProps): ReactElement => {
    const { index } = props;
    return (<View style={styles.containerRow}>
        <View style={styles.containerLeft}>
            <FastImage
                style={styles.image}
                source={IMAGES.USER}
            />
        </View>
        <View style={styles.containerText}>
            <Text style={styles.usernameText}>Martin</Text>
            <Text ellipsizeMode={'tail'} style={styles.notificationText}>Hey buddy ;), want to go for a drink tonight?</Text>
        </View>
        <View style={styles.containerRight}>
            <Text style={styles.dateText}>5.03 pm</Text>
            <Icon name={index % 4 === 0 ? "bell" : (index % 4 === 1 ? "user" : (index % 4 === 2 ? "heart" : (index % 4 === 3 ? "instagram" : "info")))} size={20}
                color={index % 4 === 0 ? COLORS.YELLOW : (index % 4 === 1 ? COLORS.FOLLOWGREEN : (index % 4 === 2 ? COLORS.PINK : (index % 4 === 3 ? COLORS.PURPLE : COLORS.PRIMARY)))} />
        </View>
    </View>);
};

export default NotificationRow;

const styles = StyleSheet.create({
    containerRow: {
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: COLORS.CHATBACKGRAY,
        borderBottomWidth: 1,
        width
    },
    containerLeft: {
        width: width * 0.20
    },
    containerText: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        width: width * 0.55
    },
    usernameText: {
        fontSize: 15,
        
        color: COLORS.BLUE,
        paddingBottom: 8
    },
    notificationText: {
        fontSize: 13,
        
        color: COLORS.LABELGRAY,
    },
    dateText: {
        fontSize: 13,
        
        color: COLORS.DARKGRAY
    },
    containerRight: {
        padding: 8,
        justifyContent: 'space-between',
        width: width * 0.20,
        alignItems: 'flex-end'
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 40,

    },
});