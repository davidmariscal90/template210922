import React, { useState, useEffect } from 'react'
import {
    StyleSheet, Text, View,
    TouchableOpacity, Image, TextInput,
    KeyboardAvoidingView, Keyboard,
    Animated,
    ScrollView,
    SafeAreaView
} from 'react-native'
import { WelcomePropsRouteParams } from './Welcome'
import { SCREEN_HEIGHT, SCREEN_WIDTH, STATUS_BAR_HEIGHT } from '../../constants'
import { Formik, FormikProps, FormikValues, FormikHelpers } from 'formik'
import * as yup from 'yup'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Easing } from 'react-native'
import { navigation } from '../../navigation/rootNavigation'

import DatePicker, { MONTH_ALIAS } from '../../components/DatePicker'
import { Alert } from 'react-native'
import IMAGES from '../../store/Images'
import COLORS from '../../styles/theme'
//import { WelcomePropsRouteParams } from './Welcome'

export interface RegisterFormValuesStep1 {
    email: string,
    fullname: string,
    password: string,
    savePassword: boolean,
    acceptConditions: boolean
}

const Register = () => {
    const _loadingDeg = new Animated.Value(0)
    const _loadingOpacity = new Animated.Value(0)
    const [email, setEmail] = useState<string>('')
    const [fullname, setFullname] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [savePassword, setSavePassword] = useState<boolean>(true)
    const [acceptConditions, setAcceptConditions] = useState<boolean>(false)
    const [step, setStep] = useState<number>(1)
    //const _onToggleTab = (type: number): void => setCurrentTab(type)
    const _onValidatedStep1 = (values: RegisterFormValuesStep1) => {
        setStep(step + 1)
        setEmail(values.email)
        setFullname(values.fullname)
        setPassword(values.password)
        setSavePassword(values.savePassword)
        setAcceptConditions(values.acceptConditions)
        const params: WelcomePropsRouteParams = {
            email: values.email,
            fullname: values.fullname,
            password: values.password,
            savePassword: values.savePassword,
            acceptConditions: values.acceptConditions,
        }
        console.log("REGISTER params", params);
        navigation.navigate('Welcome', params)
    }

    const _startLoadingAnimation = (times: number) => {
        _loadingDeg.setValue(0)
        _loadingOpacity.setValue(1)
        setTimeout(() => {
            _loadingOpacity.setValue(0)
        }, 400 * times + 100)

        Animated.timing(_loadingDeg, {
            toValue: times,
            duration: 400 * times,
            useNativeDriver: true,
            easing: Easing.linear
        }).start()
    }

    const SchemaStep1 = yup.object().shape({
        email: yup.string().email().required(),
        fullname: yup.string().matches(/[a-zA-Z]+/).required(),
        password: yup.string().min(7, 'Password must be more than 6 character').required(),
        savePassword: yup.boolean().required(),
        acceptConditions: yup.boolean().required().oneOf([true], "The terms and conditions must be accepted.")
    })
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="height" style={{
                ...styles.centerContainer,
                height: step > 1
                    ? step === 2
                        ? SCREEN_HEIGHT - 100 - STATUS_BAR_HEIGHT :
                        'auto'
                    : SCREEN_HEIGHT - 50 - STATUS_BAR_HEIGHT,
                width: step === 3 ? '100%' : 0.9 * SCREEN_WIDTH
            }}>
                <View style={styles.logoWrapper}>
                    <Image
                        resizeMode="contain"
                        style={styles.logo}
                        source={IMAGES.DENDA_LOGO} />
                </View>
                    <Formik
                        validateOnBlur={false}
                        validateOnChange={false}
                        onSubmit={_onValidatedStep1}
                        validationSchema={SchemaStep1} initialValues={{
                            email: '',
                            fullname: '',
                            password: '',
                            savePassword: true,
                            acceptConditions: false,

                        }}>
                        {(formikProps: FormikProps<RegisterFormValuesStep1>) => (
                            <>
                                <View style={styles.usernameTypesWrapper}>
                                    <View style={styles.usernameForm}>    
                                    <View style={styles.useEmail}>
                                    <View style={styles.formGroupWrapper}>
                                    <View style={{
                                            ...styles.inputWrapper,
                                            borderColor: formikProps.touched.fullname
                                                && formikProps.errors.fullname ? 'red' : '#ddd'
                                        }}>
                                            <TextInput
                                                autoCorrect={false}
                                                autoCapitalize='none'
                                                onBlur={formikProps.handleBlur('fullname')}
                                                onChangeText={(e) => {
                                                    formikProps.handleChange('fullname')(e)
                                                    formikProps.setFieldTouched('fullname', false, false)
                                                    formikProps.setErrors({ fullname: undefined })
                                                }}
                                                autoFocus={true}
                                                placeholder="Full name"
                                                keyboardType="default"
                                                returnKeyType="done"
                                                style={styles.input}
                                                value={formikProps.values.fullname} />

                                            <TouchableOpacity
                                                onPress={
                                                    () => formikProps
                                                        .setFieldValue('fullname', '')
                                                }
                                                style={styles.btnReset}>
                                                {formikProps.values.fullname.length > 0
                                                    && <Text>✕</Text>}
                                            </TouchableOpacity>
                                        </View>
                                        {formikProps.touched.fullname
                                            && formikProps.errors.fullname &&
                                            <Text style={styles.errorText}>
                                                Please input your full name.
                                            </Text>
                                        }
                                    </View>
                                    </View>
                                    <View style={styles.formGroupWrapper}>
                                            <View style={{
                                                ...styles.inputWrapper,
                                                borderColor: formikProps.touched.email
                                                    && formikProps.errors.email ? 'red' : '#ddd'
                                            }}>
                                                <TextInput
                                                    onBlur={formikProps.handleBlur('email')}
                                                    onChangeText={(e: string) => {
                                                        formikProps.handleChange('email')(e.toLowerCase())
                                                        formikProps.setFieldTouched('email', false, false)
                                                    }}
                                                    autoFocus={true}
                                                    placeholder="Email"
                                                    keyboardType="email-address"
                                                    returnKeyType="done"
                                                    style={styles.input}
                                                    value={formikProps.values.email} />

                                                <TouchableOpacity
                                                    onPress={
                                                        () => formikProps
                                                            .setFieldValue('email', '')
                                                    }
                                                    style={styles.btnReset}>
                                                    {formikProps.values.email.length > 0
                                                        && <Text>✕</Text>}
                                                </TouchableOpacity>
                                            </View>
                                            {formikProps.touched.email
                                                && formikProps.errors.email &&
                                                <Text style={styles.errorText}>
                                                    Please input a valid email.
                                            </Text>
                                            }
                                        </View>
                                    <View style={styles.formGroupWrapper}>
                                        <View style={{
                                            ...styles.inputWrapper,
                                            borderColor: formikProps.touched.password
                                                && formikProps.errors.password ? 'red' : '#ddd'
                                        }}>
                                            <TextInput
                                                onBlur={formikProps.handleBlur('password')}
                                                onChangeText={(e) => {
                                                    formikProps.handleChange('password')(e)
                                                    formikProps
                                                        .setFieldTouched('password', false, false)
                                                    formikProps.setErrors({ fullname: undefined })
                                                }}
                                                secureTextEntry={true}
                                                placeholder="Password"
                                                keyboardType="default"
                                                returnKeyType="done"
                                                style={styles.input}
                                                value={formikProps.values.password} />

                                            <TouchableOpacity
                                                onPress={
                                                    () => formikProps
                                                        .setFieldValue('password', '')
                                                }
                                                style={styles.btnReset}>
                                                {formikProps.values.password.length > 0
                                                    && <Text>✕</Text>}
                                            </TouchableOpacity>
                                        </View>
                                        {formikProps.touched.password
                                            && formikProps.errors.password &&
                                            <Text style={styles.errorText}>
                                                Password must be more than 6 characters.
                                            </Text>
                                        }
                                        <TouchableOpacity
                                            style={styles.savePassword}
                                            activeOpacity={1}
                                            onPress={() => {
                                                formikProps.
                                                    setFieldValue('savePassword',
                                                        !formikProps.values.savePassword)
                                            }} >
                                            <View style={{
                                                ...styles.checkbox,
                                                backgroundColor: formikProps.values.savePassword
                                                    ? COLORS.PRIMARY : '#fff',
                                                borderColor: formikProps.values.savePassword
                                                    ? COLORS.PRIMARY : '#ddd',
                                            }}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontWeight: '600',
                                                }}>✓</Text>
                                            </View>
                                            <Text style={{
                                                color: '#666',
                                            }}>Save password</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.savePassword}
                                            activeOpacity={1}
                                            onPress={() => {
                                                formikProps.
                                                    setFieldValue('acceptConditions',
                                                        !formikProps.values.acceptConditions)
                                            }} >
                                            <View style={{
                                                ...styles.checkbox,
                                                backgroundColor: formikProps.values.acceptConditions
                                                    ? COLORS.PRIMARY : '#fff',
                                                borderColor: formikProps.values.acceptConditions
                                                    ? COLORS.PRIMARY : '#ddd',
                                            }}>
                                                <Text style={{
                                                    color: '#fff',
                                                    fontWeight: '600',
                                                }}>✓</Text>
                                            </View>
                                            <Text style={{
                                                color: '#666',
                                            }}>I accept the terms and conditions</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {formikProps.touched.acceptConditions
                                            && formikProps.errors.acceptConditions &&
                                            <Text style={styles.errorText}>
                                                Please accept our terms & conditions
                                            </Text>
                                        }
                                        <TouchableOpacity
                                        onPress={() => {
                                            _startLoadingAnimation(1)
                                            formikProps.handleSubmit()
                                        }}
                                        activeOpacity={0.8}
                                        style={{
                                            ...styles.btnNextStep,
                                            width: SCREEN_WIDTH * 0.9
                                        }}>
                                        <Animated.Text style={{
                                            opacity: Animated.subtract(1, _loadingOpacity),
                                            fontWeight: '600',
                                            color: '#fff'
                                        }}>Sign up</Animated.Text>
                                        <Animated.Image
                                            style={{
                                                ...styles.loadingIcon,
                                                position: 'absolute',
                                                opacity: _loadingOpacity,
                                                transform: [
                                                    {
                                                        rotate: _loadingDeg
                                                            .interpolate({
                                                                inputRange: [0, 100],
                                                                outputRange: ['0deg',
                                                                    '36000deg']
                                                            })
                                                    }
                                                ]
                                            }}
                                            source={IMAGES.LOADING} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        )}

                    </Formik>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    activeOpacity={1}
                    style={styles.btnLogin}>
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 12,
                        fontWeight: '600'
                    }}>
                        <Text style={{
                            fontWeight: '500',
                            color: '#333'
                        }}>Already have account?
                </Text> Login.</Text>
             </TouchableOpacity>
             <View style={styles.otherOptionsWrapper}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}
                        style={styles.forgotPassword}
                        activeOpacity={1}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 12,
                            fontWeight: '600'
                        }}>
                            <Text style={{
                                fontWeight: '500',
                                color: '#333'
                            }}>Did your forget your login information?
                            </Text> Get helping to login.</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            
            
        </SafeAreaView >
    )
}

export default React.memo(Register)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    centerContainer: {
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    usernameTypesWrapper: {
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationTabs: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 0.5,
        position: 'relative'
    },
    activeTypeLine: {
        height: 1,
        width: '50%',
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 0
    },
    navigationTab: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
    },
    tabTitle: {
        fontWeight: '600'
    },
    usernameForm: {
        marginVertical: 20,
        width: '100%'
    },
    usePhone: {
        width: '100%'
    },
    useEmail: {
        width: '100%'
    },
    inputWrapper: {
        borderRadius: 5,
        overflow: 'hidden',
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        position: 'relative',
    },
    input: {
        width: '100%',
        height: 44,
        paddingHorizontal: 15,
        backgroundColor: 'rgb(242,242,242)'
    },
    loadingIcon: {
        width: 36,
        height: 36,
    },
    btnPhoneCode: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: 80,
    },
    phoneCodeTitleWrapper: {
        paddingVertical: 5,
        borderRightWidth: 1,
        borderRightColor: '#ddd',
        paddingHorizontal: 10
    },
    inputPhone: {
        width: '100%',
        height: 44,
        fontSize: 16,
        paddingRight: 44,
        paddingLeft: 90,
        backgroundColor: 'rgb(242,242,242)'
    },
    btnReset: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 0,
        top: 0
    },
    errorText: {
        color: 'red',
        marginVertical: 5,
    },
    btnNextStep: {
        width: '100%',
        height: 46,
        //backgroundColor: '#318bfb',
        backgroundColor: COLORS.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 5
    },

    //STEP2 STYLES
    step2Wrapper: {
        width: '100%'
    },
    step2Title: {
        marginVertical: 25,
        alignItems: 'center'
    },
    step2FormWrapper: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    formGroupWrapper: {
        marginVertical: 7.5,
        width: '100%'
    },
    savePassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    checkbox: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 18,
        width: 18,
        borderRadius: 2,
        borderWidth: 3
    },
    syncContactDescription: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0.05 * SCREEN_WIDTH
    },
    //STEP 3 STYLES
    step3ScrollView: {
        width: '100%',
    },
    step3Wrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    birthdayIcon: {
        height: 64,
        width: 64
    },
    birthdayInputWrapper: {
        width: '100%',
        paddingHorizontal: 0.05 * SCREEN_WIDTH
    },
    birthdayInput: {
        position: 'relative',
        backgroundColor: 'rgb(242,242,242)',
        width: '100%',
        height: 44,
        justifyContent: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    currentYear: {
        position: 'absolute',
        paddingHorizontal: 15,
        height: 44,
        justifyContent: 'center',
        top: 0,
        right: 0
    },
    //
    btnLogin: {
        height: 50,
        borderTopColor: '#ddd',
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoWrapper: {
        marginBottom: 20
    },
    logo: {
        height: 64,
        overflow: 'hidden'
    },
    otherOptionsWrapper: {
        width: SCREEN_WIDTH * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPassword: {
        width: SCREEN_WIDTH * 0.8,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

