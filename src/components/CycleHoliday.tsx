import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "🎄" | "🎃" | "🐇" | "🍗" | "🎆";
const alphabet: Record<Holiday, Holiday> = {
    "🎄": "🐇",
    "🐇": "🎃",
    "🎃": "🎆",
    "🎆": "🍗",
    "🍗": "🎄"
};
const chrono: Record<Holiday, Holiday> = {
    "🎃": "🍗",
    "🍗": "🎄",
    "🎄": "🎆",
    "🎆": "🐇",
    "🐇": "🎃"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    function byAlphabet(): void {
        const newHoliday = alphabet[holiday];
        setHoliday(newHoliday);
    }
    function byChrono(): void {
        const newHoliday = chrono[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <Button onClick={byChrono}>Advance by Year</Button>
            <span>Holiday: {holiday}</span>
        </div>
    );
}
