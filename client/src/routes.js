import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { AuthPage } from './pages/auth-page/AuthPage';

import { CreatePage } from './pages/create-page/CreatePage';
import { DetailPage } from './pages/detail-page/DetailPage';
import { LinksPage } from './pages/links-page/LinksPage';

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreatePage />
                </Route>
                <Route path="/detail/:id">
                    <DetailPage />
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )


}
