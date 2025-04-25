import React from 'react';
import Header from '../header';

function DefaultLayout({chidren}) {
    return (
        <>
            <Header />
            {chidren}
        </>
    );
}

export default DefaultLayout;