import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import  Login  from './login';
import AddCoursePage from './AddCoures';
import NotFound from './NotFound';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={AddCoursePage} />
          <Route path="*">
              <NotFound />
            </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
