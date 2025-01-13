import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

            <ul>
                <li>{movie.title}</li>
                <li>{movie.director}</li>
                <li>{movie.genre}</li>
                <li>{movie.release_year}</li>
                <li>{movie.abstract}</li>
                <li>
                    <img
                        src={"http://" + movie.image}
                        alt={`${movie.title}-cover`}
                    />
                </li>
                <li>{movie.created_at}</li>
                <li>{movie.updated_at}</li>
            </ul>
        </div>
    );
}
