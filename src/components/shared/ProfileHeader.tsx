import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import CONSTANTS from '../../store/Constants';
import IMAGES from '../../store/Images';
import COLORS from '../../styles/theme';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export interface IProfileHeaderProps {
}

const { width } = Dimensions.get('window');

const ProfileHeader: React.FC<IProfileHeaderProps> = (props: IProfileHeaderProps) => {

    return (
        <>
            <View style={styles.containerTop}>
                <View>
                    <FastImage
                        style={styles.image}
                        source={IMAGES.USER}
                    />
                </View>
                <View style={styles.containerCenter}>
                    <Text style={styles.usernameText}>Stefano Rey</Text>
                    <Text style={styles.userJobText}>Product Manager</Text>
                    <View style={styles.containerVerifications}>
                        <FastImage
                            style={styles.verificationImage}
                            source={IMAGES.VERIFICATION01}
                        />
                        <FastImage
                            style={styles.verificationImage}
                            source={IMAGES.VERIFICATION02}
                        />
                        <FastImage
                            style={styles.verificationImage}
                            source={IMAGES.VERIFICATION03}
                        />
                        <FastImage
                            style={styles.verificationImage}
                            source={IMAGES.VERIFICATION04}
                        />
                    </View>
                    {1 === 1 ? <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.followButton} onPress={() => { }}>
                            <Text style={styles.buttonText}>FOLLOW</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.messageButton} onPress={() => { }}>
                            <Text style={styles.buttonText}>MESSAGE</Text>
                        </TouchableOpacity>
                    </View> :
                        <View style={styles.buttonsContainer}>
                            <TouchableOpacity style={styles.followButton} onPress={() => { }}>
                                <Text style={styles.buttonText}>FAVOURITES</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.messageButton} onPress={() => { }}>
                                <Text style={styles.buttonText}>SETTINGS</Text>
                            </TouchableOpacity>
                        </View>}
                </View>
            </View>
            <View style={styles.containerBottom}>
                <View style={styles.containerData}>
                    <Text style={styles.numberText}>1553</Text>
                    <Text style={styles.labelText}>Publications</Text>
                </View>
                <View style={styles.containerData}>
                    <Text style={styles.numberText}>765</Text>
                    <Text style={styles.labelText}>Followers</Text>
                </View>
                <View style={styles.containerData}>
                    <Text style={styles.numberText}>2345</Text>
                    <Text style={styles.labelText}>Following</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.containerDescription}>
                <Text style={styles.descriptionTitle}>About</Text>
                <Text style={styles.descriptionText}>{CONSTANTS.LOREM_IPSUM}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.containerDescription}>
                <Text style={styles.descriptionTitle}>Social</Text>
                <View style={styles.containerVerifications}>
                    <Feather
                        name="globe"
                        size={24}
                        color={COLORS.BLUE}
                        style={styles.socialIcons}
                    />
                    <Feather
                        name="instagram"
                        size={24}
                        color={COLORS.PURPLE}
                        style={styles.socialIcons}
                    />
                    <Feather
                        name="linkedin"
                        size={24}
                        color={COLORS.LINKEDINBLUE}
                        style={styles.socialIcons}
                    />
                    <Feather
                        name="twitter"
                        size={24}
                        color={COLORS.TWITTERBLUE}
                        style={styles.socialIcons}
                    />
                    <Feather
                        name="facebook"
                        size={24}
                        color={COLORS.FBBTNBLUE}
                        style={styles.socialIcons}
                    />
                    <Feather
                        name="youtube"
                        size={24}
                        color={COLORS.YOUTUBERED}
                        style={styles.socialIcons}
                    />
                    <Ionicons
                        name="logo-whatsapp"
                        size={24}
                        color={COLORS.WHATSAPPGREEN}
                        style={styles.socialIcons}
                    />
                </View>
            </View>
            <View style={styles.line} />
        </>
    );
}

export default ProfileHeader;


const styles = StyleSheet.create({
    containerTop: {
        flexDirection: 'row',
        width,
        paddingBottom: 16
    },
    containerBottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    socialIcons: {
        padding: 8
    },
    containerDescription: {
        paddingTop: 16,
        //paddingHorizontal: 16
    },
    line: {
        marginTop: 16,
        width: width - 32,
        borderBottomColor: COLORS.INPUTBORDER,
        borderBottomWidth: 1
    },
    containerData: {
        width: width * 0.33
    },
    image: {
        width: 128,
        height: 128,
        borderRadius: 8,
    },
    containerVerifications: {
        flexDirection: 'row',
    },
    verificationImage: {
        width: 24,
        height: 24,
        marginRight: 4,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 24,
        borderColor: COLORS.DARKGRAY
    },
    containerCenter: {
        padding: 10,
        justifyContent: 'space-between'
    },
    usernameText: {
        color: COLORS.DARKGRAY,
        fontSize: 18,
    },
    userJobText: {
        color: COLORS.COUNTERLABELGRAY,
        fontSize: 14,
    },
    numberText: {
        textAlign: 'center',
        fontSize: 16,
        color: COLORS.DARKGRAY,
    },
    descriptionTitle: {
        fontSize: 16,
        color: COLORS.DARKGRAY,
        
        marginBottom: 8
    },
    descriptionText: {
        fontSize: 14,
        color: COLORS.COUNTERLABELGRAY,
        
    },
    labelText: {
        textAlign: 'center',
        fontSize: 14,
        color: COLORS.COUNTERLABELGRAY,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    followButton: {
        backgroundColor: COLORS.REDSEARCHBUTTONACT,
        padding: 8,
        borderRadius: 5,
        marginRight: 8,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: COLORS.DARKGRAY,
        shadowOpacity: 0.5,
    },
    messageButton: {
        backgroundColor: COLORS.DARKGRAY,
        padding: 8,
        marginHorizontal: 8,
        borderRadius: 5,
        shadowRadius: 3,
        shadowOffset: { width: 1, height: 2 },
        shadowColor: COLORS.DARKGRAY,
        shadowOpacity: 0.5,
    },
    buttonText: {
        color: COLORS.WHITE,
        fontSize: 12,
    }

});
