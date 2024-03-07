import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "purple",
    "yellow",
    "green",
    "cyan",
    "brown",
    "orange"
];
const defCOLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(defCOLOR);

    return (
        <div>
            <h3>Change Color</h3>
            {COLORS.map((col: string) => (
                <Form.Check
                    inline
                    key={col}
                    type="radio"
                    name="colors"
                    onChange={(e) => setColor(e.target.value)}
                    id="colored-box"
                    label={<span style={{ backgroundColor: col }}>{col}</span>}
                    value={col}
                    checked={color === col}
                />
            ))}
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
