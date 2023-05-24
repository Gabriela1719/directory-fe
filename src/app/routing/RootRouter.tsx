import { Navigate, Route, Routes } from "react-router-dom";
import { routePaths } from "./routes";
import { Adresar } from "../../views/adresar";
import { SecureRoutes } from "./SecureRoutes";
import { Authentication } from "../../views/authentication";
import { Favorite } from "../../views/favorite";
import { AddNewContact } from "../../views/adresar/addContact";
import { Layout } from "../../components/navigation";
import { Page } from "../../components/navigation/Page";

export const RootRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path={routePaths.login} element={<Authentication />} />
            <Route path={routePaths.register} element={<Authentication />} />

            {/*Secure routes will be added when I connect with backend.*/}
            {/*<Route element={<SecureRoutes />} >
                <Route path={routePaths.addNewContact} element={<Layout children={<AddNewContact />} />} />
            </Route>*/}
            <Route
                path={routePaths.addNewContact}
                element={<Layout
                    children={<Page
                        title={AddNewContact.title}
                        content={<AddNewContact />} />} />} />
            <Route
                path={routePaths.adresar}
                element={<Layout
                    children={<Page
                        title={Adresar.title}
                        content={<Adresar />} />} />} />
            <Route
                path={routePaths.favorite}
                element={<Layout
                    children={<Page
                        title={Favorite.title}
                        content={<Favorite />} />} />} />
        </Routes>
    );
}