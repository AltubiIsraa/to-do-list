import React from "react";
import CreateTask from "./CreateTask";
import { Link } from 'react-router-dom'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            showUpdateTask: false,
            updateTaskId: null
        };
        fetch('http://localhost:8080/tasks')
        .then(response => response.json())
        .then((response) => {
            this.setState({tasks: response});
        });
    }


    render() {

        function myFunction(id) {
            console.log(id);
                fetch('http://localhost:8080/tasks/'+id,

                    {
                    method: 'DELETE',
                })
                    .then(response => console.log(response));
                }


        function myDone(id) {
            console.log(id);
            fetch('http://localhost:8080/tasks/'+id,

                {
                    method: 'PUT',
                })
                .then(response => console.log(response));
        }

        function myFix(id){
            this.setState({
                showUpdateTask: true,
                updateTaskId: id
            })
        }





        return (
            <div className="app">
                <ul className="tasks">
                    {this.state.tasks.map(task => <li key={task.id}>{task.name}
                        <button type="button" onClick={() => myFunction(task.id)}>h</button>
                        <button type="button" onClick={() => myDone(task.id)}>done</button>
                        <button type="button" onClick={() => myFix(task.id)}>fix</button>

                    </li>)}
                </ul>

                {
                    this.state.showUpdateTask && this.updateTaskId && <CreateTask></CreateTask>
                }

                <CreateTask></CreateTask>

            </div>
        );
    }
}

export default App