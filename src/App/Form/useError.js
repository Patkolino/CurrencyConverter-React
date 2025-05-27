import { useState, useEffect } from "react";

export const useError = () => {
    const [error, setError] = useState("");

    useEffect(() => {
        if (!error) return;

        const handleClickToDismiss = () => {
            setError("");
        };

        document.addEventListener("mousedown", handleClickToDismiss);

        return () => {
            document.removeEventListener("mousedown", handleClickToDismiss);
        };
    }, [error]);

    return [error, setError];
};