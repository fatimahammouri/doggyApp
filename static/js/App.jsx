"use strict";

// import BrowserRouter Components
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;



function App() {
    /* App component controls Navigation among the App view */

    return (
        <React.Fragment>
            
            <Router>
                <nav>
                <Link to="/">Home</Link>
                </nav>
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