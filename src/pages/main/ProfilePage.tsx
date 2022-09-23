import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text, View } from 'react-native';
import HorizontalList from '../../components/shared/HorizontalList';
import HorizontalListContainer from '../../components/shared/HorizontalListContainer';
import ProfileHeader from '../../components/shared/ProfileHeader';
import COLORS from '../../styles/theme';

export interface IProfilePageProps {
}

const { width } = Dimensions.get('window');

const friendsArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const ProfilePage: React.FC<IProfilePageProps> = (props: IProfilePageProps) => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <ProfileHeader />
            <Text style={styles.descriptionTitle}>Recetas</Text>
            <HorizontalListContainer title="Últimas recetas" item={friendsArray} />
            <View style={styles.line} />
            <Text style={styles.descriptionTitle}>Podcasts</Text>
            <HorizontalListContainer title="Podcasts más escuchados" item={friendsArray} />
            <View style={styles.line} />
            <Text style={styles.descriptionTitle}>Videos</Text>
            <HorizontalListContainer title="Vídeo recetas navideñas" item={friendsArray} />
            <View style={styles.line} />
            <Text style={styles.descriptionTitle}>Noticias</Text>
            <HorizontalListContainer title="Noticias más interesantes" item={friendsArray} />
            <View style={styles.line} />
            <Text style={styles.descriptionTitle}>Friends</Text>
            <HorizontalListContainer title="Friends" item={friendsArray} />
            <View style={styles.line} />
        </ScrollView>
    );
}

export default ProfilePage;


const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    descriptionTitle: {
        fontSize: 16,
        color: COLORS.DARKGRAY,
        
        marginTop: 16,
        marginBottom: 8
    },
    line: {
        marginTop: 16,
        width: width - 32,
        borderBottomColor: COLORS.INPUTBORDER,
        borderBottomWidth: 1
    },
});
