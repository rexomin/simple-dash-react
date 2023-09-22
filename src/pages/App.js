import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Dashboard from "./panel/dashboard";
import Users from "./panel/users";
import Chat from "./panel/chat";
import Components from "./panel/components";
import Settings from "./panel/settings";
import PanelLayout from "./layouts/PanelLayout";

export default function App() {
  return <>
    <BrowserRouter>
      <PanelLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/panel/dashboard" element={<Dashboard />} />
          <Route path="panel/users" element={<Users />} />
          <Route path="panel/chat" element={<Chat />} />
          <Route path="panel/components" element={<Components />} />
          <Route path="panel/settings" element={<Settings />} />
        </Routes>
      </PanelLayout>
    </BrowserRouter>
  </>
}
