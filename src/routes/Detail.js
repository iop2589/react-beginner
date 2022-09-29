import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail"

function Detail () {
    const {id} = useParams();
    const [ movieDetail, setMovieDetail ] = useState({});
    
    // https://yts.mx/api/v2/movie_details.json?movie_id=
    const getMovie = async() => {
        const json = await (await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovieDetail(json.data.movie);
        console.log(movieDetail);
    }

    useEffect(() => {
        getMovie();
      }, []);

    return (
            <MovieDetail id={movieDetail.id} title={movieDetail.title_long} image={movieDetail.large_cover_image} detailText={movieDetail.description_full} url={movieDetail.url} />
           );
}

export default Detail;