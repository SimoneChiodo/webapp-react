import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Custom CSS
import "../assets/DetailsPage.css";

export default function DetailsPage() {
    const [movie, setMovie] = useState([]);
    const id = useParams().id;

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + "/" + id)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
            });
    }, []);

    return (
        <div className="container pt-5">
            <h1>Detailspage</h1>

            <div className="movie-card bg-light d-flex space-between border rounded-5 p-3">
                <div className="movie-card-left flex-grow-1 me-3">
                    <ul className="lh-lg">
                        <li>{movie.title}</li>
                        <li>{movie.director}</li>
                        <li>{movie.genre}</li>
                        <li>{movie.release_year}</li>
                        <li>{movie.abstract}</li>
                        <li>{movie.created_at}</li>
                        <li>{movie.updated_at}</li>
                    </ul>
                </div>
                <div className="movie-card-right">
                    <img
                        className="rounded-4"
                        src={"http://" + movie.image}
                        alt={`${movie.title}-cover`}
                    />
                </div>
            </div>
        </div>
    );
}
