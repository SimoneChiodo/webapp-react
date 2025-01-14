import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import OfflineServerPage from "./pages/OfflineServerPage";

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
                            path="details/not-found"
                            element={<NotFoundPage />}
                        ></Route>
                        <Route
                            path="/error"
                            element={<OfflineServerPage />}
                        ></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
