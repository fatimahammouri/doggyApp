function Homepage() {
    /* Homepage component shows homepge and breeds list */



    /* use useState Hook to save state of the breeds data,
        Input value in the search bar,
        filtered breeds on search
    */ 
    const [breedData, setBreedData] = React.useState([]);
    const [searchInput, setSearchInput] = React.useState("")
    const [filteredValue, setFilteredValue] = React.useState("")
    
    /* useEffect sends a fetch request to the dog API Endpoint
        on successful response from API, turn JSON response to javascript
        object then update the breed state with keys array of the object value for the key "message"
    */
    React.useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((Data) => {
                let breeds = Object.keys(Data.message)
                setBreedData(breeds)}
            )
        }, []);


    /* In the function body of set state,
        we set the searchInput which is defined in our current state 
        to receive the value of the event target that we passed in as an argument to the handle on change.
        The event target value is passed up from FilteredBreed component,
        who invokes this function each time a change is detected in the input field of the 
        search bar by accessing the callback since it is passed down as props Homepage.
    */
    let petFilterOnChange = (event) => {
        setSearchInput(event.target.value)
        console.log(searchInput)
        }
    
    /* variable named Filtered, whose return value will be an array of filtered breeds,
        filtered based on the input value key from the state that’s been updated by the on change handler 
        that’s invoked in the input field of the search bar.
    */
    let filtered = breedData.filter(value => {
        return value.includes(searchInput)
    })
    // console.log(filtered)
    
    
    return (
        <React.Fragment>
            <div>
                <h1 className="header"> Welcome to Doggy!</h1>
                <h2>Choose or search Our Breeds List to see Images</h2>
                
                <div>
                    <FilteredBreed 
                        inputValue={searchInput} 
                        petFilterOnChange={petFilterOnChange}
                        filtered={filtered}/> 
                </div>
            
            </div>
        </React.Fragment>
    )
}


function FilteredBreed(props){
    /* FilteredBreed component renders the breed that matches user input*/

    let {filtered, inputValue} = props;
    
    return (
        <div>

            <label>Search Breeds:</label>
            <input type="search" value={inputValue}  onChange={props.petFilterOnChange}/>

            {filtered.map(value =>
                <div key={value}>
                    <Link  to={`/details/${value}`}>{value}</Link> 
                </div>)
            }

        </div>
    )
    
    
}