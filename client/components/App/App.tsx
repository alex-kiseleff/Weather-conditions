/**
 * @component App -  подключение роутов для маршрутизации.
 * @returns {ReactElement}
 */
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Favorite from '../../pages/Favorite/Favorite';
import Main from '../../pages/Main/Main';
import Search from '../../pages/Search/Search';
import Page404 from '../Page404/Page404';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={Layout(<Main />)} />
                <Route path={'/favorite'} element={Layout(<Favorite />)} />
                <Route path={'/search'} element={Layout(<Search />)} />
                <Route path={'*'} element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
