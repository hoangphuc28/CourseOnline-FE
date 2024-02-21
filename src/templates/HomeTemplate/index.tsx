import React from 'react';
import { Fragment } from "react";
import { Route } from 'react-router-dom';
import Header from '../../components/Header/index.tsx';
import Footer from '../../components/Footer/index.tsx';
const HomeTemplate = (props) => {
    const {Component,...restProps} = props;
        return <Fragment>
            <Header/>
            <Component/>
            <Footer/>
        </Fragment>
};

export default HomeTemplate;