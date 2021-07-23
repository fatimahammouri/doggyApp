"use strict";

// import the BrowserRouter Components
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const useHistory = ReactRouterDOM.useHistory;



function App() {
    /* App component control Navigation among the App */

    return (
        <React.Fragment>
            
            <Router>

                <Link to="/">Home</Link>

                <Switch>

                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/details/:id">
                        <Images />
                    </Route>
                </Switch>

            </Router>

        </React.Fragment>
    )
}



// render the App component on div with id=root
ReactDOM.render(<App />, document.getElementById("root"))