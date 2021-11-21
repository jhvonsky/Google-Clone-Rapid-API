import { render } from "react-dom";
import App from "./App";
import "./global.css";
import { ResultContextProvider } from "./context/ResultContextProvider";

render(
  <ResultContextProvider>
    <App />
  </ResultContextProvider>,
  document.getElementById("root")
);
