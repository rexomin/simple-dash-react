import { Route, Routes } from "react-router-dom";

import Home from "./Home";

import Login from './Login';
import Register from './Register';

import Dashboard from "./panel/dashboard";
import Users from "./panel/users";
import Chat from "./panel/chat";
import Components from "./panel/components";
import Settings from "./panel/settings";
import PanelLayout from "./layouts/PanelLayout";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/panel/*" element={<PanelLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="chat" element={<Chat />} />
        <Route path="components" element={<Components />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </>
}
