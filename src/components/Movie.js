import PropsType from "prop-types";
import {Link} from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} />
            <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
            <p>{summary}</p>
            <ul>
                {
                    genres.map((gen) => (
                        <li key={gen}>{gen}</li>
                    ))
                }
            </ul>
        </div>);
}

Movie.propType = {
    id : PropsType.number.isRequired,
    coverImg : PropsType.string.isRequired,
    title : PropsType.string.isRequired,
    summary : PropsType.string.isRequired,
    genres : PropsType.array.isRequired
}


export default Movie;