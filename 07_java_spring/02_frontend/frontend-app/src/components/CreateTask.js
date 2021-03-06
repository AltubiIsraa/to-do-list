import React from "react";

class CreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.CreateTask = this.CreateTask.bind(this);
    }

    CreateTask() {
        fetch('http://localhost:8080/tasks',
            {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log(response));
    }

    handleInputChange(event) {
        const target = event.target;
        const {value, name} = target;

        this.setState({
            [name]: value,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Enter Name</label>
                        <input type="text" name="name" value={this.props.name} onChange={this.handleInputChange}/>

                    </div>
                    <div className="form-group">
                        <label>Enter id</label>
                        <input type="number" name="id" value={this.props.id} onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Create task" onClick={this.CreateTask}/>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateTask