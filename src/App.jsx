import { Route, Routes } from "react-router-dom";
import { FormLogin } from "./components/FormLogin";
import { FormRegister } from "./components/FormRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
      </Routes>
    </>
  );
}

export default App;
