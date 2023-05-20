import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./routing/RootRouter";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  )
}