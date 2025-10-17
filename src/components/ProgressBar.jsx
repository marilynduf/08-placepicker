import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
    console.log("render Progress");
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const handleTime = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);
        return () => clearInterval(handleTime);
    }, []);

    return <progress value={remainingTime} max={timer}></progress>;
}
