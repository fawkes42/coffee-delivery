import { Route } from "react-router";
import { Routes } from "react-router-dom";

import { Default } from "./layouts/Default";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />}>
            </Route>
        </Routes>
    );
}