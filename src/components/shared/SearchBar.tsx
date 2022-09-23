import React from 'react';
import { StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import COLORS from '../../styles/theme';

export interface IProps {
}

const SearchBarComponent: React.FC<IProps> = (props: IProps) => {

    const updateSearch: any = (search: string): void => {
    }
    const search: string = '';

    return (

        <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            lightTheme
            containerStyle={styles.containerStyle}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholderTextColor={COLORS.BLACK}
            searchIcon={styles.searchIconStyle}
            clearIcon={styles.clearIconStyle}
        />

    );
}

export default SearchBarComponent;


const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: COLORS.PRIMARY,
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent'
    },
    inputContainerStyle: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 5
    },
    inputStyle: {
        
        color: COLORS.BLACK
    },
    searchIconStyle: {
        color: COLORS.USERGRAYICON,
        size: 20,
        name: 'search'
    },
    clearIconStyle: {
        color: COLORS.SEARCHBUTTONSTAB,
        size: 20,
        name: 'cancel'
    }

});