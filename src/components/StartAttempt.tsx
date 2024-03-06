import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function start(): void {
        setProgress(!progress);
        setAttempt(attempts - 1);
    }
    function stop(): void {
        setProgress(!progress);
    }
    function mulligan(): void {
        setAttempt(1 + attempts);
    }

    return (
        <div>
            <Button
                onClick={start}
                disabled={progress === true || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={mulligan} disabled={progress === true}>
                Mulligan
            </Button>
            <Button onClick={stop} disabled={progress === false}>
                Stop Quiz
            </Button>
            {attempts}
        </div>
    );
}
