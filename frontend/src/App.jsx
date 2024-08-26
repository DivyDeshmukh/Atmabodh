import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/Container/Container";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
import AuthLayout from "./components/AuthLayout";

function App({ link, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
