import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import Account from './pages/Account'
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRoute> <Account /> </ProtectedRoute> } />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
