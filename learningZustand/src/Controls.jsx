import useCounterStore from "./store/useCounterStore";

function Controls() {
    const increase = useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);
    const reset = useCounterStore((state) => state.reset);

    return (
        <>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Controls;