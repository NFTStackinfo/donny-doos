import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import './styles/main.scss';
import Landing from "./views/Landing";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./redux/store";
import {Provider} from "react-redux";
import MintView from "./views/MintView";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route exact path="/mint" element={<MintView/>}/>
            </Routes>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
