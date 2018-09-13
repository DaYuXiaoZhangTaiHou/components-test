'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import './flex.js'
const appHistory = useRouterHistory(createHashHistory)(
    {
        forceRefresh: true,
        getUserConfirmation: (message, callback) => callback(window.confirm(message))
    });
const HomeRoutes = (
    <Route path="/" getComponent={ (state, cb) => {
            require.ensure([], require => {
                cb(null, require('./pages/aa').default);
            });
        } }/>
);
ReactDOM.render(
    <Router history={ appHistory }>
        { HomeRoutes }
        <Route path="login" getComponent={ (state, cb) => {
                require.ensure([], require => {
                    cb(null, require('./pages/bb').default);
                });
            } }/>
    </Router>,
    document.getElementById('cxt')
);