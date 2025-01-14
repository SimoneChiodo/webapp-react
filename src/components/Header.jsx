import { Link } from "react-router-dom";

// Custom CSS
import "../assets/Header.css";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-center">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        className="header-popcorn"
                        src="/pop-corn.png"
                        alt="pop-corn"
                        draggable="false"
                    />
                    <h1>&nbsp;&nbsp; Movies! &nbsp;&nbsp;</h1>
                    <img
                        className="header-popcorn"
                        src="/pop-corn.png"
                        alt="pop-corn"
                        draggable="false"
                    />
                </Link>

                {/* <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/details/1">
                                Details
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}
