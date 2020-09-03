import { createStore } from "redux";
import { countryList } from "../components/countries";

export const nextAction = (payload) => {
  return {
    type: "NEXT",
    payload,
  };
};

export const displaySummaryAction = () => {
  return {
    type: "DISPLAY_SUMMARY",
  };
};

export const numOfQuestionsAction = (payload) => {
  return {
    type: "NUMBER_OF_QUESTIONS",
    payload,
  };
};

const handleNext = (state, payload) => {
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
};

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
  numberOfQuestions: 5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT":
      return handleNext(state, action.payload);
    case "DISPLAY_SUMMARY":
      return handleDisplaySummary(state);
    case "NUMBER_OF_QUESTIONS":
      return { ...initialState, numberOfQuestions: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
