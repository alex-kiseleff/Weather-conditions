/**
 * @component App -  подключение роутов для маршрутизации,
 * глобального контекста [Context].
 * @returns {ReactElement}
 */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Context from '../../context';
import State from '../../state';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import Details from '../../pages/Details/Details';
import Page404 from '../../pages/Page404/Page404';

const App = () => {
    const [state, setState] = useState(State);
    return (
        <Context.Provider value={{ state, setState }}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={Layout(<Main />)} />
                    <Route path={'/details'} element={Layout(<Details />)} />
                    <Route path={'*'} element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    );
};

export default App;
