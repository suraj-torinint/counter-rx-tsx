import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrementDispatch, incrementDispatch } from "./State/actions";
import { stateType } from "./State/countReducer";

function App() {
  const count = useSelector((state: stateType) => state.counter);
  const dispatch = useDispatch();

  const handleDecrement = () => {
    // dispatch(incrementDispatch());
    dispatch(decrementDispatch());
    console.log(count);
  };

  const handleIncrement = () => {
    // dispatch(decrementDispatch());
    dispatch(incrementDispatch());
    console.log(count);
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <span className="display-1">Counter App</span>
        <div className="row mt-5">
          <div className="col"></div>
          <div className="card text-center col-sm-4">
            <div className="card-body">
              <button onClick={handleDecrement} className="btn btn-danger">
                Decrement
              </button>
              <span className="mx-5 fs-2">{count}</span>
              <button onClick={handleIncrement} className="btn btn-success">
                Increment
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
