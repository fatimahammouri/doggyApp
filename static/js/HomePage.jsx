function Homepage() {
    /* Homepage component shows homepge and breeds list */

    /* useEffect to send a fetch request to the dog API Endpoint
        on successful response from API, turn JSON response to javascript
        object then update the breed state with value of the key "message" */

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


    /* filter breeds array and save returned match with value of 
        searchInput: (value of user input into the input element)
    */
    const filtered = breeds.filter(breed => {
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

            <button onClick={() => {
               setFilteredValue(filtered[0])
               alert("Breed was not found, Please try again")}}> Search </button>

            <FilteredBreed value={filteredValue}/> 

            {breeds.map(breed =>
                 <Link key={breed} to={`/details/${breed}`}>{breed.toUpperCase()}</Link>)}
            
        </React.Fragment>
    )
}


function FilteredBreed(props){
    /* FilteredBreed component renders the breed thet matches user input*/
    
    let {value} = props;
    
    return (
        <div>
           <Link key={value} to={`/details/${value}`}>{value}</Link> 
        </div>
    )
}