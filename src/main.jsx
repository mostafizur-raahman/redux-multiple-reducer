import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Counter from "./components/Counter.jsx";
import { store } from "./Redux/Store";
import { Provider } from "react-redux";
import DynamicCounter from "./components/DynamicCounter";
import Test from "./components/Test";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <Test></Test>
            <Counter></Counter>
            <DynamicCounter></DynamicCounter>
        </Provider>
    </React.StrictMode>
);
