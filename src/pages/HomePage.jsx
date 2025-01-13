import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
            });
    }, []);

    return (
        <div className="container pt-5">
            <h1>Homepage</h1>

            <ul>
                {movies.map((movie) => (
                    <li key={`movie-` + movie.id}>
                        <Link to={"/details/" + movie.id}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
