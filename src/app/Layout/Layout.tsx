import React from 'react';
import { Outlet } from 'react-router-dom';

import Container from '@mui/material/Container';
import { NavBar } from 'src/wigets/NavBar/ui/NavBar.tsx';
import { FirebaseContextProps } from 'src/app/types/firebaseTypes.ts';



export const Layout = (props: FirebaseContextProps) => {

    const { auth, db, app } = props;

    return (
        <div>
            <NavBar auth={auth}/>
            <hr/>
            <Container maxWidth={'xl'}>
                <Outlet context={{ auth, db, app }}/>
            </Container>
        </div>
    )
}