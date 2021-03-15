import React, { useReducer } from "react";

import "./App.css";

import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";

import reducer, { initialState } from "./reducers/index";

import {
    applyNumber,
    changeOperation,
    clearDisplay,
    memoryPlus,
    memoryClear,
    memoryRecall,
} from "./actions";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state, dispatch);

    const handleNumber = (num) => {
        dispatch(applyNumber(num));
    };

    const handleChangeOperation = (operation) => {
        dispatch(changeOperation(operation));
    };

    const handleClearDisplay = (num) => {
        dispatch(clearDisplay());
    };

    const handleMemoryPlus = () => {
        dispatch(memoryPlus());
    };

    const handleMemoryClear = () => {
        dispatch(memoryClear());
    };

    const handleMemoryRecall = () => {
        dispatch(memoryRecall());
    };

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img alt="" width="40px" src="./Lambda-Logo-Red.png" />{" "}
                    Lambda Reducer Challenge
                </a>
            </nav>

            <div className="container row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <form name="Cal">
                        <TotalDisplay value={state.total} />
                        <div className="row details">
                            <span id="operation">
                                <b>Operation:</b> {state.operation}
                            </span>
                            <span id="memory">
                                <b>Memory:</b> {state.memory}
                            </span>
                        </div>

                        <div className="row">
                            <CalcButton
                                value={"M+"}
                                onClick={handleMemoryPlus}
                            />
                            <CalcButton
                                value={"MR"}
                                onClick={handleMemoryRecall}
                            />
                            <CalcButton
                                value={"MC"}
                                onClick={handleMemoryClear}
                            />
                        </div>

                        <div className="row">
                            <CalcButton
                                value={1}
                                onClick={() => handleNumber(1)}
                            />
                            <CalcButton
                                value={2}
                                onClick={() => handleNumber(2)}
                            />
                            <CalcButton
                                value={3}
                                onClick={() => handleNumber(3)}
                            />
                        </div>

                        <div className="row">
                            <CalcButton
                                value={4}
                                onClick={() => handleNumber(4)}
                            />
                            <CalcButton
                                value={5}
                                onClick={() => handleNumber(5)}
                            />
                            <CalcButton
                                value={6}
                                onClick={() => handleNumber(6)}
                            />
                        </div>

                        <div className="row">
                            <CalcButton
                                value={7}
                                onClick={() => handleNumber(7)}
                            />
                            <CalcButton
                                value={8}
                                onClick={() => handleNumber(8)}
                            />
                            <CalcButton
                                value={9}
                                onClick={() => handleNumber(9)}
                            />
                        </div>

                        <div className="row">
                            <CalcButton
                                value={"+"}
                                onClick={() => handleChangeOperation("+")}
                            />
                            <CalcButton
                                value={"*"}
                                onClick={() => handleChangeOperation("*")}
                            />
                            <CalcButton
                                value={"-"}
                                onClick={() => handleChangeOperation("-")}
                            />
                        </div>

                        <div className="row ce_button">
                            <CalcButton
                                value={"CE"}
                                onClick={handleClearDisplay}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
