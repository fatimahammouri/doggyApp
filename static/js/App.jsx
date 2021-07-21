"use strict";

// import the BrowserRouter Components
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const useHistory = ReactRouterDOM.useHistory;


function Homepage() {
    /* Homepage component shows homepge and breeds list */

    return (
        <React.Fragment>
            <h1> Hi, Doggy!</h1>
        </React.Fragment>
    )
}





function App() {
    /* App component control Navigation among the App */

    return (
        <React.Fragment>
            <Homepage />
            <Router>

                <Link to="/">Home</Link>

                <Switch>

                    <Route exact path="/">
                        <Homepage />
                    </Route>

                </Switch>

            </Router>

        </React.Fragment>
    )
}
