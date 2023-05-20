import { Navigate, Route, Routes } from "react-router-dom";
import { routePaths } from "./routes";
import { Adresar } from "../../views/adresar";
import { SecureRoutes } from "./SecureRoutes";
import { Authentication } from "../../views/authentication";
import { Favorite } from "../../views/favorite";
import { AddNewContact } from "../../views/adresar/addContact";
import { Layout } from "../../components/navigation";

export const RootRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path={routePaths.login} element={<Authentication />} />
            <Route path={routePaths.register} element={<Authentication />} />

            <Route element={<SecureRoutes />} >
                <Route path={routePaths.addNewContact} element={<Layout children={<AddNewContact />} />} />
            </Route>
            <Route path={routePaths.adresar} element={<Layout children={<Adresar />} />} />
            <Route path={routePaths.favorite} element={<Layout children={<Favorite />} />} />
        </Routes>
    );
}