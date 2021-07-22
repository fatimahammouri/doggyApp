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
    const [searchInput, setSearchInput] = React.useState("")
    const [filteredValue, setFilteredValue] = React.useState("")

    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((breedData) => setBreedData(breedData.message))
    }, []);

    // push all keys(breeds names) from breedData object to breeds array
    let breeds = []
    for (const breed of Object.keys(breedData)){
       breeds.push(breed) 
    }
    // console.log(breeds)

    const filtered = breeds.filter(breed => {
        // console.log( breed.includes(searchInput))
        return breed.toLowerCase().includes(searchInput.toLowerCase())
        })
        // console.log(filtered) 
        // console.log(typeof(filtered[0]))

    return (
        <React.Fragment>
            <h1> Hi, Doggy!</h1>
            
            <label>Search for a Breed:</label>
            <input type="search" 
                onChange={(event)=>setSearchInput(event.target.value)}/>

             <button>Search</button>

            {breeds.map(breed =>
                 <Link key={breed} to={`/details/${breed}`}>{breed.toUpperCase()}</Link>)}
            
        </React.Fragment>
    )
}


function Images() {
    /* Images component renders on a seperate page */

    // useEffect to send a fetch request to the dog API images Endpoint
    // on successful response from API, convert JSON response to
    // js object then update the images state with value of the key "message"

    // use useState Hook to save state of the images data
    const [images, setImages] = React.useState([])

    // useParams saves the parameter from url (specific breed) so we can 
    //  use it in fetching images for that specific breed
    const params = ReactRouterDOM.useParams();
    // console.log(params)

    React.useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${params.id}/images`)
            .then(response => response.json())
            .then((imagesData) => setImages(imagesData.message))
    }, [])

    return (
        <React.Fragment>
            {images.map(image => <img src={image}></img>)}
        </React.Fragment>
    )
}


// function Search(props){
//     /* Search component to search breed list */
    
//     const [searchInput, setSearchInput] = React.useState([])
//     const {breeds} = props;

//     function findBreed(){
//         const filtered = breeds.filter(breed => {
//             // console.log( breed.includes(searchInput))
//             return breed.includes(searchInput)
//         })
//         console.log(filtered)
//          
//     }

//     return(
//         <React.Fragment>
//             
//         </React.Fragment>
//     )
// }

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