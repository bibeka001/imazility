import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import {isAuthenticated} from "../../Services/Utilities/auth";
const PrivateRoute = ({children, ...rest}) => {

}
PrivateRoute.propTypes = {
    children: PropTypes.instanceOf(Object),
    exact:PropTypes.bool,
    path: PropTypes.string,
};
PrivateRoute.defaultProps = {
    children: {},
    exact:false,
    path:'/',
};

export default PrivateRoute;