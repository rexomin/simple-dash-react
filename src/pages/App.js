import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Components from "./Components";

export default function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  </>
}
