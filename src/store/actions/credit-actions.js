import {CreditActionType} from "./actionTypes";

export const setCreditPurpose = (creditPurpose) => ({
  type: CreditActionType.SET_CREDIT_PURPOSE,
  payload: creditPurpose,
});

export const setPropertyValue = (propertyValue) => ({
  type: CreditActionType.SET_PROPERTY_VALUE,
  payload: propertyValue,
});

export const setInitialPayment = (initialPayment) => ({
  type: CreditActionType.SET_INITIAL_PAYMENT,
  payload: initialPayment,
});

export const setPeriod = (period) => ({
  type: CreditActionType.SET_PERIOD,
  payload: period,
});

export const setMaternalCapital = (maternalCapital) => ({
  type: CreditActionType.SET_MATERNAL_CAPITAL,
  payload: maternalCapital,
});

export const setInsuranceCar = (insuranceCar) => ({
  type: CreditActionType.SET_INSURANCE_CAR,
  payload: insuranceCar,
});

export const setInsuranceLife = (insuranceLife) => ({
  type: CreditActionType.SET_INSURANCE_LIFE,
  payload: insuranceLife,
});

export const setInitialState = () => ({
  type: CreditActionType.SET_INITIAL_STATE,
});
