import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { NavBarApp } from "./components/NavBarApp";
import { Error } from "./components/Error";
import "./styles/App.css";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProductsProvider } from "./context/ProductsContext";
import { FavsPage } from "./pages/FavsPage";

function App() {
  return (
    <>
      <ProductsProvider>
        <AuthProvider>
          <NavBarApp />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/favs" element={<FavsPage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
