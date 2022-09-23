import CONSTANTS from '../Constants';

const loadingReducer = (state = false, action:any) => {
  switch(action.type) {
    case CONSTANTS.LOADING:
      return action.loading;
  default:
    return false;
  }
}

const loadingReducers = { loadingReducer };

export default loadingReducers;
