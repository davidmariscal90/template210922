import React, { ReactElement } from 'react';
import {
    View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

interface IProps {
    title: string;
}

const ListTitle: React.FC<IProps> = (props: IProps): ReactElement => {
    const { title
    } = props;
    return (
        <TouchableOpacity style={styles.viewRow} onPress={() => { }}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.seeAllButton}>
                <Feather
                    name="chevron-right"
                    size={12}
                    color="#212121"
                    style={Platform.select({
                        ios: { marginBottom: 1 },
                        android: { marginBottom: 0 },
                    })}
                />
            </View>
        </TouchableOpacity>

    );
};

export default ListTitle;

const styles = StyleSheet.create({
    viewRow: {
        marginTop: 8,
        marginLeft: 16,
        width,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 16,
        color: '#212121',
        
    },
    seeAllButton: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 4,
        width: 72,

    },
});
