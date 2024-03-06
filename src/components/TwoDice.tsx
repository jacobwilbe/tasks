import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [dieVal, setDieVal] = useState<number>(0);
    const [dieVal2, setDieVal2] = useState<number>(4);
    function roll1(): void {
        setDieVal(d6());
    }
    function roll2(): void {
        setDieVal2(d6());
    }

    return (
        <div>
            <span data-testid="left-die">{dieVal}</span>
            <span data-testid="right-die">{dieVal2}</span>
            <Button onClick={roll1}>Roll Left</Button>
            <Button onClick={roll2}>Roll Right</Button>
            {dieVal === dieVal2 && dieVal === 1 ? (
                <span>Lose</span>
            ) : dieVal === dieVal2 ? (
                <span>Win</span>
            ) : (
                <span></span>
            )}
        </div>
    );
}
