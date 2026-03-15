import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <p>{time}</p>;
}

export default Timer;