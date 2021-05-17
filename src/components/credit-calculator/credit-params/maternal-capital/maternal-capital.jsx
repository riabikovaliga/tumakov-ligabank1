import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {CreditActions} from "../../../../store/actions";
import InputCheckbox from "../input-checkbox/input-checkbox";

const MATERNAL_CAPITAL = 470000;

const MaternalCapital = () => {
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    isChecked
      ? dispatch(CreditActions.setMaternalCapital(MATERNAL_CAPITAL))
      : dispatch(CreditActions.setMaternalCapital(0));
  });

  return (
    <div className="credit-params__checkboxes">
      <InputCheckbox
        id="maternal-capital"
        content="Использовать материнский капитал"
        isChecked={isChecked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default MaternalCapital;
