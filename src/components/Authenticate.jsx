import { response } from "express";
import { useState } from "react";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    async function handleClick() {
        try {
            const response = await fetch(""), 
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        };
        const result = await response.json();
        setSuccessMessage(result.message);
    } catch (error) {
        setError(error.message);
    }

    return (
        <div>
            <h3>Authenticated</h3>;{successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onCLick={handleClick}>Authenticated Token</button>
        </div>
    );
}