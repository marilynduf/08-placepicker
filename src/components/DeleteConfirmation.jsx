import { useEffect, useState } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
    const [remainingTime, setRemainingTime] = useState(TIMER);

    useEffect(() => {
        const handleTime = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
        }, 10);
        return () => clearInterval(handleTime);
    }, []);

    useEffect(() => {
        const timeTest = setTimeout(() => {
            onConfirm();
        }, TIMER);

        return () => clearTimeout(timeTest);
    }, []);

    console.log(remainingTime / 1000);
    let remainingTimeInSeconds = remainingTime / 1000;
    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <p>
                This place will be removed in {remainingTimeInSeconds} seconds
            </p>
            <progress
                value={remainingTimeInSeconds}
                max={TIMER / 1000}
            ></progress>
            <div id="confirmation-actions">
                <button onClick={onCancel} className="button-text">
                    No
                </button>
                <button onClick={onConfirm} className="button">
                    Yes
                </button>
            </div>
        </div>
    );
}
