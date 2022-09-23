// import liraries
import React, { ReactElement } from 'react';
import {
    View, Text, StyleSheet, Dimensions,
} from 'react-native';
import COLORS from '../../styles/theme';

const { width } = Dimensions.get('window');
// create a component
export interface IProps {
    label: string
}

const NotificationLabel: React.FC<IProps> = (props: IProps): ReactElement => {
    const { label } = props;
    return (
        <View style={styles.labelView}>
            <Text style={styles.labelText}>{label}</Text>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    labelView: {
        paddingVertical: 16,
        width,
        paddingLeft: 16,
        backgroundColor: COLORS.BLUEGRAY,
        borderBottomColor: COLORS.BORDERGRAY,
        borderBottomWidth: 1,
    },
    labelText: {
        
        fontSize: 12,
        fontWeight: '500',
        color: '#7c858a',
    },
});

// make this component available to the app
export default NotificationLabel;
