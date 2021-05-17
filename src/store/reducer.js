import {CreditActionType} from "./actions/actionTypes";

const initialState = {
  creditPurpose: null,
  propertyValue: 2000000,
  initialPayment: 200000,
  period: 5,
  maternalCapital: 0,
  insuranceCar: false,
  insuranceLife: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CreditActionType.SET_CREDIT_PURPOSE:
      return Object.assign({}, state, {
        creditPurpose: action.payload,
      });

    case CreditActionType.SET_PROPERTY_VALUE:
      return Object.assign({}, state, {
        propertyValue: action.payload,
      });

    case CreditActionType.SET_INITIAL_PAYMENT:
      return Object.assign({}, state, {
        initialPayment: action.payload,
      });

    case CreditActionType.SET_PERIOD:
      return Object.assign({}, state, {
        period: action.payload,
      });

    case CreditActionType.SET_MATERNAL_CAPITAL:
      return Object.assign({}, state, {
        maternalCapital: action.payload,
      });

    case CreditActionType.SET_INSURANCE_CAR:
      return Object.assign({}, state, {
        insuranceCar: action.payload,
      });

    case CreditActionType.SET_INSURANCE_LIFE:
      return Object.assign({}, state, {
        insuranceLife: action.payload,
      });

    case CreditActionType.SET_INITIAL_STATE:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
};
