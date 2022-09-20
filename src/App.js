import { useEffect, useState }  from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async() => {
      const json = await (
        await fetch (
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }

  useEffect(() => {
      getMovies();
    }, []);
  return (
    <div>
      <ul>
      {
        loading ? <h1>Loading ...</h1> : 
          movies.map((movie) => 
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {
                  movie.genres.map((gen) => (
                    <li key={gen}>{gen}</li>
                  ))
                }
              </ul>
            </div>
          )
      }
    </ul>
    </div>
  );
}

export default App;
