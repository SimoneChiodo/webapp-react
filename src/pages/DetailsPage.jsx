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

    // At start
    useEffect(() => {
        // Execute async fetch to check respond value
        const fetchData = async () => {
            // Try the fetch
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}/${id}`
                );

                // Status 200 OK
                if (response.status === 200) {
                    const data = await response.json();
                    setMovie(data);
                }
                // Status 404 NOT-FOUND
                else if (response.status === 404) {
                    navigate("/details/not-found");
                }
                // Other cases (send to catch)
                else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            } catch (error) {
                //If the fetch fail, send to error page
                console.error("Errore nella richiesta:", error);
                navigate("/error");
            }
        };

        // Call the async function
        fetchData();
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
