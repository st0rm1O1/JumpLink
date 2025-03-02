import { Routes, Route } from "react-router-dom";
import RedirectPage from "./pages/RedirectPage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/:slug" element={<RedirectPage />} />
    </Routes>
  );
}

export default App;
