import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
    console.log("render confirmation");
    useEffect(() => {
        const timeTest = setTimeout(() => {
            onConfirm();
        }, TIMER);

        return () => clearTimeout(timeTest);
    }, []);
    return (
        <div id="delete-confirmation">
            <h2>Are you sure?</h2>
            <p>Do you really want to remove this place?</p>
            <ProgressBar timer={TIMER}></ProgressBar>
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
