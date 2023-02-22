import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import MainLayout from "./components/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExperiencePage from "./components/ExperiencePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<MainLayout />} path="/" />
          <Route element={<ExperiencePage />} path="/:user/experiences/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
