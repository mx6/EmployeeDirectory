import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Searchbar({employeeSearch}) {
console.log({employeeSearch})
    return (
        <div>

            <InputGroup className="mb-3">
                <FormControl
                    type="text"
                    onChange={employeeSearch}
                    placeholder="Search Here"
                    aria-label="Search Here"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                </InputGroup.Append>
            </InputGroup>

        </div>
    )
}

export default Searchbar;