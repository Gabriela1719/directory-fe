import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./routing/RootRouter";
import { Layout } from "../components/navigation/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <RootRouter />
      </Layout>

    </BrowserRouter>
  )
}