import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "./components/Table";
import API from "./utils/API";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h3>Employee Directory</h3>
       <h5>Click on 'name' to sort alphabetically, or use the search box to find an employee.</h5>
      </header>
      <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
      
    </div>
  );

  // componentDidMount() {
  //   this.peopleDir("");
  // }
  // peopleDir = query => {
  //   API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.peopleDir(this.state.search);
  // };

}

export default App;
