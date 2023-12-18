import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './homepage'; // Import your homepage component
import Issue from './issue';   // Import the new page component
const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/issue" component={Form} />
            </Switch>
        </Router>
    );
};
export default App;
