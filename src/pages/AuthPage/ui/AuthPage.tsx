import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import Button from '@mui/material/Button';
import { classNames } from "src/shared/lib/classNames/classNames.ts";

import { Auth } from '@firebase/auth';
import cls from "./AuthPage.module.css";

interface AuthPageProps {
    auth: Auth;
}
export const AuthPage = (props: AuthPageProps) => {

    const { auth } = props;

    const provider = new GoogleAuthProvider();

    const login = async () => {
        const {user} = await signInWithPopup(auth, provider)
        if (user) {
            console.log('ВЫ авторизованы')
        }
    }

    return (
        <div className={classNames(cls.AuthPage)}>
            <div className={cls.centerBlock}>
                <h1>
                    Hello
                </h1>
                <h2>
                    A am Time tracker
                </h2>
                <Button variant="outlined" onClick={login}>
                    Войти через гугл
                </Button>
            </div>


        </div>
    );
};

