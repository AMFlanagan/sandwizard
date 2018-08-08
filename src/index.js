import App from "./App";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;