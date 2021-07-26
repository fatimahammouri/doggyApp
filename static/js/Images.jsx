function Images() {
    /* Images component renders on a seperate page */

    const [images, setImages] = React.useState([])
    const params = ReactRouterDOM.useParams();
    /* useParams saves the parameter from url (specific breed) so we can 
        use it in fetching images for that specific breed
    */
    // console.log(params)


    /* useEffect to send a fetch request to the dog API images Endpoint
        on successful response from API, convert JSON response to
        js object then update the images state with value of the key "message"
    */
    React.useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${params.id}/images`)
            .then(response => response.json())
            .then((imagesData) => setImages(imagesData.message))
    }, [])

    /* for now we will show only Four images from the images Array
    TODO:
        add functionlity/option that allows user to load more images on demand
        or specify the number of images to view
    */
    let showImages = images.slice(0,4)

    
    return (
        <div>
            <h1> {params.id} </h1>
        
            <div className="images_grid">
                {showImages.map(image => <img key ={image} src={image}></img>)}
            </div>
        </div>
    )
}
