export default function MovieReviews({ reviews }) {
    return (
        <section id="movie-reviews">
            <h2 key={`riview-title`}>Reviews:</h2>

            <div className="row row-cols-1 row-cols-md-2 g-3 mb-5">
                {reviews.map((review, index) => (
                    <div key={`riview-${index}`} className="col h-100">
                        <div className="movie-riview bg-light border rounded-5 p-3">
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
                                    <span>&nbsp;{review.review_vote}</span>
                                </li>
                                <li>
                                    <span className="fs-5">Review:</span>
                                    <span>&nbsp;{review.review_text}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
