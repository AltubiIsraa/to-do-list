import React from "react";
import CreateTask from "./CreateTask";
import FixTask from "./FixTask";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      fixable: false,
    };
    fetch("http://localhost:8080/tasks")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ tasks: response });
      });
  }

  render() {
    function myFunction(id) {
      console.log(id);
      fetch(
        "http://localhost:8080/tasks/" + id,

        {
          method: "DELETE",
        }
      ).then((response) => console.log(response));
    }

    function myDone(id) {
      console.log(id);
      fetch(
        "http://localhost:8080/tasks/" + id,

        {
          method: "PUT",
        }
      ).then((response) => console.log(response));
    }

    return (
      <div className="app">
        <ul className="tasks">
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              {task.name}
              <button type="button" onClick={() => myFunction(task.id)}>
                Delete
              </button>
              <button type="button" onClick={() => myDone(task.id)}>
                Done
              </button>
              <button
                type="button"
                onClick={() => this.setState({ fixable: !this.state.fixable })}
              >
                Fix {task.id}
              </button>
            </li>
          ))}
        </ul>

        <CreateTask></CreateTask>
        {this.state.fixable && <FixTask></FixTask>}
      </div>
    );
  }
}

export default App;
