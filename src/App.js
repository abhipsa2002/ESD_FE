import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login';
import AddCoursePage from './AddCoures';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={AddCoursePage} />

                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
};

export default App;
