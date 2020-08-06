import { createStore } from "redux";
import {
  countryList
} from "../countries";

export function nextAction(payload) {
  return {
    type: "NEXT",
    payload,
  };
}

export function displaySummaryAction() {
  return {
    type: "DISPLAY_SUMMARY",
  };
}

function handleNext(state, payload) {
  const { id, correct } = payload;
  console.log(`id in handle submit answer.. ${id}, ${correct}`);
  const { countryList, answeredList, correctAnswerCounter } = state;
  const countryObj = countryList.find((countryObj) => countryObj.id === id);
  const updatedCountryList = countryList.filter((cntry) => cntry.id !== id);
  console.log(`updatedCountryList length: ${updatedCountryList.length}`);
  let updatedAnsweredList;
  let count = 0;
  countryObj.correct = correct;
  updatedAnsweredList = [...answeredList, countryObj];

  if (correct === "Yes") {
    count = 1;
  }

  return {
    ...state,
    answeredList: updatedAnsweredList,
    countryList: updatedCountryList,
    correctAnswerCounter: correctAnswerCounter + count,
  };
}

function handleDisplaySummary(state) {
  console.log("handleDislpaySummary");
  return {
    ...state,
    testCompleted: true,
  };
}

const initialState = {
  countryList,
  answeredList: [],
  correctAnswerCounter: 0,
  testCompleted: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "NEXT":
      return handleNext(state, action.payload);
    case "DISPLAY_SUMMARY":
      return handleDisplaySummary(state);

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
