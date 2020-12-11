import React, { useState, useEffect } from "react";
import { Table, Col, Row } from "react-bootstrap";
import Searchbar from "./Searchbar";
// import TableX from "./TableX";

const EmployeeTable = props => {
    const employees = props.employees;
    const [searchTerm, setSearchTerm]=useState(null)
    const [filterArray, setFilterArray]=useState(employees)
    function employeeSearch(event) {
        console.log(event.target.value);
                setSearchTerm(event.target.value)
    }
    useEffect(() => {
        let filtered=employees.filter(employee => employee.name.last.toLowerCase().includes(searchTerm))
        return setFilterArray(filtered)
    }, [searchTerm])  

    useEffect( () => {
        setFilterArray(employees)
    }, [employees]

    )

    // console.log(props)
 
    return (

        <div>
            <Searchbar employeeSearch={employeeSearch} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
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
                        <td><img src={employee.picture.medium} alt="these are people"/></td>
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