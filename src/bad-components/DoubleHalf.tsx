import React, { useState } from "react";
import { Button } from "react-bootstrap";
interface DoubleButtonProp {
    doublehalve: () => void;
}

function Doubler({ doublehalve }: DoubleButtonProp): JSX.Element {
    return <Button onClick={doublehalve}>Double</Button>;
}
function Halver({ doublehalve }: DoubleButtonProp): JSX.Element {
    return <Button onClick={doublehalve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const double = () => setDhValue(2 * dhValue);
    const half = () => setDhValue(0.5 * dhValue);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler doublehalve={double}></Doubler>
            <Halver doublehalve={half}></Halver>
        </div>
    );
}
