import ReactDOM from "react-dom/client";
import Home from "./Home";
import KoreanPage from "./KoreanPage";
import SpanishPage from "./SpanishPage";
import FrenchPage from "./FrenchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/korean" element={<KoreanPage />} />
        <Route path="/spanish" element={<SpanishPage />} />
        <Route path="/french" element={<FrenchPage />} />
      </Routes>
    </BrowserRouter>  
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);