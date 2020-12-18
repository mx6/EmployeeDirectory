import React, { useState, useEffect } from "react";
import { Table, Col, Row } from "react-bootstrap";
import Searchbar from "./Searchbar";
// import TableX from "./TableX";

const EmployeeTable = props => {
    const employees = props.employees;
    const [searchTerm, setSearchTerm] = useState(null)
    const [filterArray, setFilterArray] = useState(employees)
    const [sortType, setSortType] = useState("asc")
    function employeeSearch(event) {
        console.log(event.target.value);
        setSearchTerm(event.target.value)
    }
    useEffect(() => {
        let filtered = employees.filter(employee => employee.name.last.toLowerCase().includes(searchTerm))
        return setFilterArray(filtered)
    }, [searchTerm])

    useEffect(() => {
        setFilterArray(employees)
    }, [employees]

    )
    useEffect(() => {
        sortType === "desc" ? setFilterArray(
            [...filterArray].sort((a, b) =>
                a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1
            )
        ) : setFilterArray(
            [...filterArray].sort((a, b) =>
                b.name.last.toLowerCase() > a.name.last.toLowerCase() ? 1 : -1
            )
        )


    }, [sortType])


    function sortToggle() {
        sortType === "asc" ? setSortType("desc") : setSortType("asc")
    };



    return (

        <div>
            <Searchbar employeeSearch={employeeSearch} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th className="sorted" onClick={sortToggle}>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {/* <th>Picture</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        filterArray.map(employee => {
                            <p>{employee.name.first}</p>
                            return (
                                <tr key={employee.email}>
                                    <td><img src={employee.picture.large} alt="these are people" /></td>
                                    <td>{employee.name.first}</td>
                                    <td>{employee.name.last}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.email}</td>

                                </tr>)
                        })
                    }


                </tbody>
            </Table>


        </div>
    )

}
export default EmployeeTable;