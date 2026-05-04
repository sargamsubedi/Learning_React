
import useCounterStore from "./store/useCounterStore";


function Display() {
    const count = useCounterStore((state) => state.count);

    return <h1>{count}</h1>;
}

export default Display;