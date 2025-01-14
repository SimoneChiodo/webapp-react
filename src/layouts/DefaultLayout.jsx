import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";

export default function DefaultLayout() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Outlet />
            </main>

            <footer></footer>
        </>
    );
}
