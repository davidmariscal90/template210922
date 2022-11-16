import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store/Store';
import RootStackNavigation from './src/navigation';
import database from '@react-native-firebase/database'
import { convertToFirebaseDatabasePathName } from './src/utils';
import { AppState } from 'react-native';

//import AuthSelector from './src/components/selector/AuthSelector';
interface IProps {
    navigation: StackNavigationProp<any, any>,
}

const App = () => {
    const myUsername = store.getState().user.user?.userInfo?.username
    const ref = useRef<{ itv: NodeJS.Timeout }>({
        itv: setInterval(() => { }, 3000)
    })
    useEffect(() => {
        clearInterval(ref.current.itv)
        SplashScreen.hide()
        // const db = firestore()
        // db.collection('posts').get().then(rs => {
        // 	rs.docs.map(doc => {
        // 		const post: Post = doc.data() as Post
        // 		if (post.source) {
        // 			const tasks = post.source.map(async x => {
        // 				const className = await getImageClass(x.uri)
        // 				return className
        // 			})
        // 			Promise.all(tasks).then(classes => {
        // 				doc.ref.update({
        // 					labels: classes
        // 				})
        // 			})
        // 		}
        // 	})
        // })
        if (myUsername) {
            // limit functions quota
            ref.current.itv = setInterval(() => {
                if (AppState.currentState === 'active') {
                    database().ref(`/online/${convertToFirebaseDatabasePathName(myUsername)}`)
                        .update({
                            last_online: new Date().getTime(),
                            status: 1
                        })
                }
            }, 60000)
        }
    }, [])
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RootStackNavigation />
            </PersistGate>
        </Provider>
    );
};

export default App;


//<AuthSelector {...props} />
