import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { useIdToken } from 'react-firebase-hooks/auth';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { AuthPage } from 'src/pages/AuthPage';
import { Layout } from 'src/app/Layout/Layout.tsx';
import { Loader } from 'src/wigets/Loader/ui/Loader.tsx';


const firebaseConfig = {
    apiKey: 'AIzaSyD7s8jlYu9VpSRRAhJuXzC1uVr0hjDNVZM',
    authDomain: 'timetracker-94f86.firebaseapp.com',
    projectId: 'timetracker-94f86',
    storageBucket: 'timetracker-94f86.appspot.com',
    messagingSenderId: '1067972925445',
    appId: '1:1067972925445:web:b7ed85495ed5a48091a46c'
};


function App() {

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const db = getFirestore(app)

    const [
        user,
        loading
        // error
    ] = useIdToken(auth);

    if (loading) {
        return <Loader/>
    }

    return (
        <>
            {
                user
                    ? <Layout app={app} db={db} auth={auth}/>
                    : <AuthPage auth={auth}/>
            }
        </>
    )
}

export default App
