import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [left, setLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("0");

    const handleGainAttempt = () => {
        const requestedAttempts = parseInt(request);
        if (!isNaN(requestedAttempts)) {
            setLeft(left + requestedAttempts);
        }
    };

    function use(): void {
        if (left > 0) {
            setLeft(left - 1);
        }
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGivenAnswer">
                <Form.Label>Given Answer:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={use} disabled={left === 0}>
                Use
            </Button>
            <Button onClick={handleGainAttempt}>Gain</Button>
            <div>You have {left} attempts.</div>
        </div>
    );
}
