import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Home = React.lazy(()=> import('./Views/Home'));






export class App extends React.Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default App;
