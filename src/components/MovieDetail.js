function MovieDetail ({id, title, image, detailText, url}) {
    return (
        <div id={id}>
            <h1><a href={url}>{title}</a></h1>
            <img src={image} />
            <p>{detailText}</p>
        </div>
    );
}


export default MovieDetail;