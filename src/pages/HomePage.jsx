import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Custom CSS
import "../assets/HomePage.css";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    // At start
    useEffect(() => {
        // Execute async fetch to check respond value
        const fetchData = async () => {
            // Try the fetch
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_BACKEND_URL}`
                );

                // Status 200 OK
                if (response.status === 200) {
                    const data = await response.json();
                    setMovies(data);
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
