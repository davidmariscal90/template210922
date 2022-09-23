import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export interface IMainPageProps {
}

const { width } = Dimensions.get('window');

const MainPage: React.FC<IMainPageProps> = (props: IMainPageProps) => {

    return (
        <>
            <View style={styles.container}>
                <Text>Main</Text>
            </View>
        </>
    );
}

export default MainPage;


const styles = StyleSheet.create({
    container: {
        width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});