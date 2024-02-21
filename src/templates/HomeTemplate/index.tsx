import React from 'react';
import { Fragment } from "react";
import { Route } from 'react-router-dom';
const HomeTemplate = (props) => {
    const {Component,...restProps} = props;
        return <Fragment>
            <Component/>
        </Fragment>
};

export default HomeTemplate;