import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import Home from "./components/Home";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import HowToPay from "./components/HowToPay";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout className="layout">
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <NavBar />
        </Header>
        <Content
          className="container"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/how_to_pay" element={<HowToPay />} />
            <Route path="/contact_us" element={<Contact />} />
            <Route path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route path="/terms_and_conditions" element={<TermsConditions />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }} className="footer-links">
          <span style={{ color: "#ffff", marginRight: "30px" }}>
            <Link to={"/privacy_policy"}>Privacy Policy</Link>
          </span>
          <span style={{ color: "#ffff", marginRight: "30px" }}>
            <Link to={"/terms_and_conditions"}>Terms and Conditions</Link>
          </span>
          <span
            style={{
              color: "#ffff",
              marginRight: "30px",
              backgroundColor: "#000",
            }}
          >
            Football Highway Enterprises ©{new Date().getFullYear()}
          </span>
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
