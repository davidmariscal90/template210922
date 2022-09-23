import React, { ReactElement } from 'react';
import {
    StyleSheet, Dimensions, View,
} from 'react-native';
import ListTitle from './ListTitle';
import VerticalListContainer from './VerticalListContainer';

const { width } = Dimensions.get('window');

export interface IVerticalListProps {
    title: string;
    item: Array<Object>;
}

const VerticalList: React.FC<IVerticalListProps> = (props: IVerticalListProps): ReactElement => {

    const { title, item } = props;

    return (
        <>
            <ListTitle title={title} />
            <VerticalListContainer title={title} item={item} />
            <View style={styles.line} />
        </>
    );
};

export default VerticalList;

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