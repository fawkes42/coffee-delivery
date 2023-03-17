import { Route } from "react-router";
import { Routes } from "react-router-dom";

import { Default } from "./layouts/Default";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
}