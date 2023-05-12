import { Route, Routes } from "react-router-dom";
import { routePaths } from "./routes";
import { Adresar } from "../../views/adresar";

export const RootRouter = () => {
    return (
        <Routes>
            <Route path={routePaths.adresar} element={<Adresar />} />
        </Routes>
    )
}