import React from 'react';
import {__RouterContext} from 'react-router-dom';

const RouterContext = React.createContext({});

export default RouterContext;

export const RouterProvider = RouterContext.Provider;

export const RouterConsumer = RouterContext.Consumer;