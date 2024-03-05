import React, { useState } from "react";
import mark from "./mark.jpg.webp";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    const [RevealAnswer, setVisible] = useState<boolean>(false);
    function flipVisibility(): void {
        setVisible(!RevealAnswer);
    }
    return (
        <div className="App">
            <header className="App-header">UD CISC275 Using State</header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <Button onClick={flipVisibility}>Reveal Answer</Button>
            {RevealAnswer && <div>42</div>}
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
