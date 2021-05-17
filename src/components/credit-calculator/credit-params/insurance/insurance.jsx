import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {CreditActions} from "../../../../store/actions";
import InputCheckbox from "../input-checkbox/input-checkbox";

const Insurance = () => {
  const dispatch = useDispatch();
  const [isCarChecked, setCarChecked] = useState(false);
  const [isLifeChecked, setLifeChecked] = useState(false);

  useEffect(() => {
    isCarChecked
      ? dispatch(CreditActions.setInsuranceCar(true))
      : dispatch(CreditActions.setInsuranceCar(false));
  }, [dispatch, isCarChecked]);

  useEffect(() => {
    isLifeChecked
      ? dispatch(CreditActions.setInsuranceLife(true))
      : dispatch(CreditActions.setInsuranceLife(false));
  }, [dispatch, isLifeChecked]);

  return (
    <div className="credit-params__checkboxes">
      <InputCheckbox
        id="insurance-car"
        content="Оформить КАСКО в нашем банке"
        isChecked={isCarChecked}
        setChecked={setCarChecked}
      />
      <InputCheckbox
        id="insurance-life"
        content="Оформить Страхование жизни в нашем банке"
        isChecked={isLifeChecked}
        setChecked={setLifeChecked}
      />
    </div>
  );
};

export default Insurance;
