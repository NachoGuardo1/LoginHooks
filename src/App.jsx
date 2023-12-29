import { Route, Routes } from "react-router-dom";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";
import { Home } from "./components/Home";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormLogin />} />
          <Route path="/register" element={<FormRegister />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
