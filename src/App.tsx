import { useEffect } from "react";
import "./App.css";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("🚀 ~ logCount ~ count:", count);
};

const SetCount = () => {
  useCounterStore.setState({ count: 1 });
};

const App = () => {
  const count = useCounterStore((state) => state.count);
  return <OtherComponent count={count} />;
};

export const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.deccrement);

  useEffect(() => {
    logCount();
    SetCount();
  }, []);

  return (
    <div>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>IncrementAsync</button>

        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
