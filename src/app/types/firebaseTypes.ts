import { Auth } from '@firebase/auth';
import { Firestore } from '@firebase/firestore';
import { FirebaseApp } from '@firebase/app';

export interface FirebaseContextProps {
    auth?: Auth;
    db?: Firestore;
    app?: FirebaseApp;
}