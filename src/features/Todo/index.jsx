import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import ListPage from './Pages/ListPage';
import DetailPage from './Pages/DetailPage';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';


TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoFeature;