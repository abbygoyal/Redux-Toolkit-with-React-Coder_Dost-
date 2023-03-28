import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../reducers/reward";
function Reward() {
  const dispatch = useDispatch();
  const points = useSelector((state) => state.reward.points);

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Reward Component</b>
        </h4>
        <h3>Total point : {points}</h3>
        <button onClick={() => dispatch(increment())}>Increment +</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement -</button>
        <button onClick={() => dispatch(incrementByAmount(7))}>
          IncrementBySeven +
        </button>
      </div>
    </div>
  );
}

export default Reward;
