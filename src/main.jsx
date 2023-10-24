import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { scrollSpy } from "react-scroll";

scrollSpy.update();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
