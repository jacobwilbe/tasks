import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [given, setGiven] = useState<string>("");
    function updateGiven(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setGiven(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formMovieName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={1}
                    value={given}
                    onChange={updateGiven}
                />
            </Form.Group>
            <div>{given === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
