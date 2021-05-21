import makeSentence from "./task-1/makeSentence.jsx";
import { weather, localCurrency, city } from "./task-2/getLocationData.jsx";
import getProcessingPage from "./task-4/getProcessingPageHelper.jsx";
import App from "./task-5/codeReview.jsx";

import logo from "./logo.svg";

import "./App.css";

// Im aware that this should be names App, but i renamed it to be able to test component for task 5
function RootApp() {
  const str = "penpineapplepenapple";
  const dict = ["apple", "pen", "applepen", "pine", "pineapple"];

  // task 1
  console.log(makeSentence(str, dict));

  // task 2
  city().then((res) => {
    console.log("city res:", res);
    return res;
  });
  weather().then((res) => {
    console.log("weather res:", res);
    return res;
  });
  localCurrency().then((res) => {
    console.log("localCurrency res:", res);
    return res;
  });

  //task 3
  const array = [
    { state: "processing" },
    { state: "error" },
    { state: "error", errorCode: "NO_STOCK" },
    { state: "error", errorCode: "INCORRECT_DETAILS" },
    { state: "error", errorCode: null },
    { state: "success" },
  ];

  getProcessingPage(array);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tasks 1, 2 and 4 are in console log</p>
        <App />
      </header>
    </div>
  );
}

export default RootApp;
