import CONSTANTS from '../Constants';

const userReducer = (state = null, action:any) => {
  switch(action.type) {
    case CONSTANTS.STORE_USER: 
      return action.user;
    case CONSTANTS.LOG_OUT:
      return null;
    case CONSTANTS.UPDATE_USER_CITY_STORE: {
      return { ...state, city: action.location.city, location: { latitude : action.location.latitude, longitude : action.location.longitude } };
    }
  default:
    return state;
  }
}

const loginReducers = { userReducer };

export default loginReducers;
