import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBarComponent from '../../components/shared/SearchBar';
import COLORS from '../../styles/theme';
import SearchPage from './SearchPage';
//import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import HomePage from './HomePage';

export interface ISearchPageProps {
}

const SearchTabsPage: React.FC<ISearchPageProps> = (props: ISearchPageProps) => {

    /**return (
        <>
            <SafeAreaView style={styles.safeContainer}>
                <SearchBarComponent />
            </SafeAreaView>
            <ScrollableTabView
                initialPage={0}
                tabBarTextStyle={styles.tabText}
                tabBarUnderlineStyle={styles.underline}
                tabBarActiveTextColor={COLORS.WHITE}
                tabBarBackgroundColor={COLORS.PRIMARY}
                tabBarInactiveTextColor={COLORS.BACKGRAY}
                renderTabBar={() => <DefaultTabBar />}
            >
                <HomePage tabLabel={'Users'.toUpperCase()} />
                <SearchPage tabLabel={'Publications'.toUpperCase()} />
            </ScrollableTabView>
        </>
    );*/
    return (
        <>
            <SafeAreaView style={styles.safeContainer}>
                <SearchBarComponent />
            </SafeAreaView>
        </>
    );
}

export default SearchTabsPage;

const styles = StyleSheet.create({
    safeContainer: {
        backgroundColor: COLORS.PRIMARY
    },
    tabText: {
        
        fontWeight: 'normal',
        fontSize: 12
    },
    underline: {
        backgroundColor: COLORS.PRIMARY,
        height: 2,
        //width: 48,
        //marginLeft: 48
    }
});

