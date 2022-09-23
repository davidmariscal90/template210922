import CONSTANTS from './Constants';

/** ACCIONES DE REGISTRO */
export const actionFacebookSignIn = () => ({ type: CONSTANTS.SIGN_IN_FACEBOOK });
export const actionRegisterWithEmail = (data: any) => ({ type: CONSTANTS.REGISTER_WITH_EMAIL, data });
export const actionSignInWithEmail = (data: any) => ({ type: CONSTANTS.SIGN_IN_WITH_EMAIL, data });
export const actionForgotPassword = (email: string) => ({ type: CONSTANTS.FORGOT_PASSWORD, email });
export const actionLogOut = () => ({ type: CONSTANTS.USER_LOG_OUT });
export const actionCleanStore = () => ({ type: CONSTANTS.LOG_OUT });

/**USERS */
export const actionGetCurrentUser = (uid: any) => ({ type: CONSTANTS.GET_CURRENT_USER_DETAILS, uid });
export const actionStoreUser = (user: any) => ({ type: CONSTANTS.STORE_USER, user });
export const actionUpdateUserCityStore = (location: any) => ({ type: CONSTANTS.UPDATE_USER_CITY_STORE, location });
export const actionUpdateUser = (user: any) => ({ type: CONSTANTS.UPDATE_USER, user });

/** LOADING */
export const actionLoading = (loading: boolean) => ({ type: CONSTANTS.LOADING, loading });
