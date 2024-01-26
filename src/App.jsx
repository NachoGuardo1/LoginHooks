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
import { ProductsDetails } from "./components/ProductsDetails";
import { ProductCategory } from "./components/ProductCategory";
import { FooterApp } from "./components/FooterApp";
import { Dashboard } from "./pages/Dashboard";
import { AdminRoute } from "./private-routes/AdminRoute";

function App() {
  return (
    <>
      <ProductsProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<NavBarApp />}>
              <Route index element={<HomePage />} />
              <Route path="/details/:productId" element={<ProductsDetails />} />
              <Route path="/category/:category" element={<ProductCategory />} />
              <Route path="/favs" element={<FavsPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/dashboard"
                element={
                  <AdminRoute>
                    <Dashboard />
                  </AdminRoute>
                }
              />
            </Route>
          </Routes>
          <FooterApp />
        </AuthProvider>
      </ProductsProvider>
    </>
  );
}

export default App;
