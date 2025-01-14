export default function MovieDetailsCard({ movie }) {
    return (
        <section id="movie-details">
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
        </section>
    );
}
