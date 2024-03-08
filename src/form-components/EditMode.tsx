import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-happy-check"
                checked={edit}
                onChange={updateEdit}
            />
            {edit && (
                <>
                    <Form.Check
                        type="checkbox"
                        id="check-student"
                        label="Student?"
                        checked={student === true}
                        onChange={updateStudent}
                    />
                    <Form.Control
                        as="textarea"
                        rows={1}
                        value={name}
                        onChange={updateName}
                    />
                    <div>
                        {name} {student ? "is" : "is not"} a student.
                    </div>
                </>
            )}
            {!edit && (
                <div>
                    {name} {student ? "is" : "is not"} a student.
                </div>
            )}
        </div>
    );
}
