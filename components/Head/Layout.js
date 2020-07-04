import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation/Navigation';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>OnTime - Personal Task Manager</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/slate/bootstrap.min.css"></link>
            </Head>
            <Navigation />
                {props.children}
        </div>
    )
}

export default Layout
