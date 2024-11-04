import "./App.css";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);
  return <OtherComponent count={count} />;
}

export const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.deccrement);
  return (
    <div>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={increment}>Increment</button>

        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
