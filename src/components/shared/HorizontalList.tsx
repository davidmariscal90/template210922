import React, { ReactElement } from 'react';
import {
    StyleSheet, Dimensions, View
} from 'react-native';
import COLORS from '../../styles/theme';
import ListTitle from './ListTitle';
import HorizontalListContainer from './HorizontalListContainer';

const { width } = Dimensions.get('window');

export interface IHorizontalListProps {
    title: string;
    item: Array<Object>;
}

const HorizontalList: React.FC<IHorizontalListProps> = (props: IHorizontalListProps): ReactElement => {

    const { title, item } = props;
    return (
        <>
            <ListTitle title={title} />

            <HorizontalListContainer title={title} item={item} />
            <View style={styles.line} />
        </>
    );
};

export default HorizontalList;

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
        width: width / 3 - 10,
        height: width / 3 - 10,
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