import Navbar from "./Navbar";
import { createElement as $ } from "react";

function App() {
  return $("div", { className: "App" }, $(Navbar));
}

export default App;
