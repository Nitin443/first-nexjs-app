import { atom, useAtom } from "jotai";
const AtomCount = atom(0);

function Counters() {
  const [counter, setCounter] = useAtom(AtomCount);

  return(
    <div>
      <h4>Counter:{counter}</h4>
      <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
      <button onClick={() => setCounter((c) => c - 1)}>Decrement</button>

    </div>
  );
}

export default Counters;