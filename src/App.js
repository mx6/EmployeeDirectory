import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable";
import Header from "./components/Header"



function App() {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then(response => {
      // console.log(response.data.results)
      setEmployees([...response.data.results])

      function sortByName(currentSpot, nextSpot) {
        if (currentSpot.name.first > nextSpot.name.first) {
          return 1;
        }
        return -1;
      }
      
      response.data.results.sort(sortByName);

      

      // console.log(response.data.results[0]employee.name.first);
      // console.log(response.data.results[199]employee.name.first);


    })
  }, [])

  // console.log(employees);
  // employee.name.first.onclick = function(){sortByName};
  
  return (
    <div className="App">
      <Header />
      <header className="App-header">

      </header>
      <EmployeeTable employees={employees} />

    </div>
  );
}

export default App;
