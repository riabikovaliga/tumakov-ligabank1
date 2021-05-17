import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {useScrollbarSize} from "react-scrollbar-size";
import CreditPage from "../pages/credit-page/credit-page";
import "../../scss/style.scss";

const MOBILE_WIDTH = 320;

const App = () => {
  const {width} = useScrollbarSize();

  document.body.style.minWidth = `${MOBILE_WIDTH - width}px`;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CreditPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
