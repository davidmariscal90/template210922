import {
  all,
} from 'redux-saga/effects';
/**import primaryFunctionLogin from './LoginSagas';
import primaryFunctionUser from './UserSagas';
import primaryFunctionService from './ServiceSagas';*/

export default function* rootSaga() {
  yield all([
    //...primaryFunctionLogin, ...primaryFunctionUser, ...primaryFunctionService
  ]);
}
