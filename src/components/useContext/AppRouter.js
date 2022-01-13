import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useRouteMatch,
    useParams
} from 'react-router-dom';

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <Routes>
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="*" element={<HomeScreen />} />
                </Routes>
            </div>
        </Router>
    )
}
