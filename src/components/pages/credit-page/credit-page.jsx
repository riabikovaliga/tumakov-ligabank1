import React, {createContext, useState} from "react";
import Header from "../../header/header";
import Slider from "../../slider/slider";
import Services from "../../services/services";
import CreditCalculator from "../../credit-calculator/credit-calculator";
import OfficeMap from "../../office-map/office-map";
import Footer from "../../footer/footer";
import Login from "../../login/login";
import "./credit-page.scss";

export const LoginContext = createContext();

const CreditPage = () => {
  const [isLoginShown, setLoginShown] = useState(false);

  return (
    <LoginContext.Provider value={setLoginShown}>
      <Header />
      <main className="credit-page">
        <h1 className="visually-hidden">Лига-Банк</h1>
        <Slider />
        <Services />
        <CreditCalculator />
        <OfficeMap />
      </main>
      <Footer />
      {isLoginShown && <Login />}
    </LoginContext.Provider>
  );
};

export default CreditPage;
