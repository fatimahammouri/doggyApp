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
    let showImages = images.slice(0,4)
    return (
        <div>
            <h1> {params.id} </h1>
        
            <div className="images_grid">
                {showImages.map(image => <img src={image}></img>)}
            </div>
        </div>
    )
}
