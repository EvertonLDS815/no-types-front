import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NoPage from '../pages/NoPage';

function Router() {
    return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/no/:id" element={<NoPage />} />
      </Routes>
    )
  }

export default Router;