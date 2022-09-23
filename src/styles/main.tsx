import COLORS from "./theme";
import {  Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const whiteTextStyle = { marginBottom: 16, marginHorizontal: 8, color: COLORS.WHITE, fontSize: 14 };

export const welcomeBackText = { marginBottom: 8, color: COLORS.WHITE, fontSize: 16 };

export const logoTeemEmpty = { width: 276, height: 144 };

export const listContainer = {
  margin: 16,
  backgroundColor: 'transparent',
  //height: 800
  width: width - 32,
  shadowOffset: { width: 1, height: 1 },
  shadowColor: COLORS.BORDERGRAY,
  shadowOpacity: 2,
}

export const searchBoxStyle = {
  textInputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  textInput: {
    height: 38,
    color: COLORS.TEXTINPUT,
    fontSize: 16,
    
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
  container: { width, flex: 1 },
  row: { backgroundColor: COLORS.WHITE },
  listView: { marginTop: 10 }
}

  export const fbButton = {
      width: width - 48,
      height: 80,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.FBBTNBLUE,
      flexDirection: 'row',
  }

  export const loginButton = {
    width: width - 48,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LOGINGREEN,
    flexDirection: 'row',
  }

  export const registerButton = {
    width: width - 48,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.WHITE,
    flexDirection: 'row',
}