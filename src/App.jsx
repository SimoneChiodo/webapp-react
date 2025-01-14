import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

//Custom CSS
import "./assets/App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />} path="/">
                        <Route index element={<HomePage />}></Route>
                        <Route
                            path="details/:id"
                            element={<DetailsPage />}
                        ></Route>
                        <Route
                            path="not-found"
                            element={<NotFoundPage />}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
