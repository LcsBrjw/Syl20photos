import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import {ROUTES} from "./config/routes";
import { NewArticle } from "./components/NewArticle/NewArticle";
import {Register} from "./components/Register/Register";
import { AppLayout } from "./App-layout";
import { HeroArticle } from "./components/HomePage/HeroArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout />}>
            <Route path={ROUTES.HOME} element={<HeroArticle />} />
            <Route path={ROUTES.NEW_ARTICLE} element={<NewArticle />} />
        </Route>
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path="*" element={<h1>Erreur 404, page introuvable</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
