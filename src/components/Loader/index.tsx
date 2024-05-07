import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
    const loader = useSelector(state => state.loader.value)
    return (
        <Fragment>
            {
                loader ? <div className="loader">
                    <span className="loader-spinner">Loading...</span>
                </div> :
                    <Fragment></Fragment>
            }
        </Fragment>
    );
};

export default Loader;