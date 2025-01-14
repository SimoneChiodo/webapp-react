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
        <section id="movie-card" className="container pt-5">
            {/* Page Title */}
            <h1>
                {movie.title} <span className="side-title">details:</span>
            </h1>

            {/* Movie Details Card */}
            <div className="movie-card bg-light position-relative d-flex space-between border rounded-5 p-3 mt-3 mb-5">
                <img
                    className="movie-card-popcorn position-absolute"
                    src="/pop-corn.png"
                    alt="pop-corn"
                    draggable="false"
                />

                <div className="movie-card-left flex-grow-1 d-flex">
                    <div className="details-card-left">
                        <ul className="lh-sm">
                            <li>
                                <b>Title: </b>
                                <p>{movie.title}</p>
                            </li>
                            <li>
                                <b>Director: </b>
                                <p>{movie.director}</p>
                            </li>
                            <li>
                                <b>Genre: </b>
                                <p>{movie.genre}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="details-card-right">
                        <ul className="lh-sm">
                            <li>
                                <b>Release Year: </b>
                                <p>{movie.release_year}</p>
                            </li>
                            <li>
                                <b>Abstract: </b>
                                <p>{movie.abstract}</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="movie-card-right">
                    <img
                        className="rounded-4"
                        src={"http://" + movie.image}
                        alt={`${movie.title}-cover`}
                    />
                </div>
            </div>

            {/* Movie Reviews */}
            {movie.reviews && (
                <>
                    <h2 key={`riview-title`}>Reviews:</h2>

                    <div class="row row-cols-1 row-cols-md-2 g-3 mb-5">
                        {movie.reviews.map((review, index) => (
                            <div className="col">
                                <div
                                    key={`riview-${index}`}
                                    className="movie-riview bg-light border rounded-5 p-3"
                                >
                                    <ul className="lh-lg">
                                        <li className="d-flex">
                                            <img
                                                className="profile-picture"
                                                src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                                                alt="profile-picture"
                                            />
                                            <h3 className="m-0 mt-1">
                                                &nbsp;
                                                {review.review_name}
                                            </h3>
                                        </li>
                                        <li>
                                            <span className="fs-5">Vote:</span>
                                            <span>
                                                &nbsp;{review.review_vote}
                                            </span>
                                        </li>
                                        <li>
                                            <span className="fs-5">
                                                Review:
                                            </span>
                                            <span>
                                                &nbsp;{review.review_text}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
