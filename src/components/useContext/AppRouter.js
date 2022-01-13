import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from 'react-router-dom';
import { aboutScreen } from './aboutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <switch>
                    <Route path="/about" component={ aboutScreen } />
                </switch>
            </div>
        </Router>
    )
}
