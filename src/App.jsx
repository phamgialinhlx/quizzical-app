import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="quiz" index element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}