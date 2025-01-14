import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components
import MovieReviews from "../components/MovieReviews";
import MovieDetailsCard from "../components/MovieDetailsCard";

// Custom CSS
import "../assets/DetailsPage.css";

export default function DetailsPage() {
    const [movie, setMovie] = useState([]);
    const id = useParams().id;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + "/" + id)
            .then((res) => {
                if (res.status === 404) navigate("/not-found");
                return res.json();
            })
            .then((data) => {
                setMovie(data);
            });
    }, []);

    return (
        <section id="movie-details" className="container pt-5">
            {/* Page Title */}
            <h1>
                {movie.title} <span className="side-title">details:</span>
            </h1>

            {/* Section: Movie Details Card */}
            <MovieDetailsCard movie={movie} />

            {/* Section: Movie Reviews */}
            {movie.reviews && <MovieReviews reviews={movie.reviews} />}
        </section>
    );
}
