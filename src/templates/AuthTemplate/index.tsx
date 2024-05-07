import React from 'react';
import { Fragment } from "react";
import Header from '../../components/Header/index.tsx';
import Footer from '../../components/Footer/index.tsx';
const AuthTemplate = (props) => {
    const {Component,...restProps} = props;
        return <Fragment>
            <Header/>
            <Component/>
        </Fragment>
};

export default AuthTemplate;