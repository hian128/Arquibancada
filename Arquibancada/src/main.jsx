import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Integrantes from "./pages/Integrantes";


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/integrantes" element={<Integrantes />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);