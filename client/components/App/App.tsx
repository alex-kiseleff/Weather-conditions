/**
 * @component App -  подключение роутов для маршрутизации,
 * глобального контекста [Context].
 * @returns {ReactElement}
 */
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StateContext from '../../contexts/stateContext';
import HintContext from '../../contexts/HintContext';
import State from '../../state';
import Layout from '../Layout/Layout';
import Main from '../../pages/Main/Main';
import Details from '../../pages/Details/Details';

const App = () => {
    const [state, setState] = useState(State);
    const [hint, setHint] = useState('');
    return (
        <StateContext.Provider value={{ state, setState }}>
            <HintContext.Provider value={{ hint, setHint }}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={Layout(<Main />)} />
                        <Route
                            path={'/details'}
                            element={Layout(<Details />)}
                        />
                    </Routes>
                </BrowserRouter>
            </HintContext.Provider>
        </StateContext.Provider>
    );
};

export default App;
