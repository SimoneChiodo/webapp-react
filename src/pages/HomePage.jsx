import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Custom CSS
import "../assets/HomePage.css";

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

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mb-5">
                {movies.map((movie) => (
                    <div key={`movie-` + movie.id} className="col ">
                        <Link to={"/details/" + movie.id}>
                            <div className="movie-card bg-light position-relative border rounded-5 p-3 mt-3 mb-5 text-center h-90">
                                <h3>{movie.title}</h3>

                                <img
                                    className="movie-cover rounded-4"
                                    src={"http://" + movie.image}
                                    alt={`${movie.title}-cover`}
                                    draggable="false"
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
