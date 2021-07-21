"use strict";

// import the BrowserRouter Components
const Router = ReactRouterDOM.BrowserRouter;
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const Switch = ReactRouterDOM.Switch;
const useHistory = ReactRouterDOM.useHistory;


function Homepage() {
    /* Homepage component shows homepge and breeds list */

    // useEffect to send a fetch request to the dog API Endpoint
    // on successful response from API, turn JSON response to
    // js object then update the breed state with value of the key "message"

    // use useState Hook to save state of the breeds data 
    const [breedData, setBreedData] = React.useState([]);
    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((breedData) => setBreedData(breedData.message))
    }, []);


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
                    {/* <Route path="/details/:id">
                        <Images />
                    </Route> */}
                </Switch>

            </Router>

        </React.Fragment>
    )
}



// render the App component on div with id=root
ReactDOM.render(<App />, document.getElementById("root"))