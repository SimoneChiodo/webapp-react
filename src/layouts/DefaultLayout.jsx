import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <header className="sticky-top">
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}
