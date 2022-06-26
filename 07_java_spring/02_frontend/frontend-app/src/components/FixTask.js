import React from "react";

class FixTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    fetch("http://localhost:8080/tasks")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ tasks: response });
      });
    this.handleInputChange = this.handleInputChange.bind(this);
    this.FixTask = this.FixTask.bind(this);
  }

  FixTask() {
    fetch("http://localhost:8080/tasks", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => console.log(response));
  }

  handleInputChange(event) {
    const target = event.target;
    const { value, name } = target;

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
            <input
              type="text"
              name="name"
              value={this.props.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Enter id</label>
            <output
              type="number"
              name="id"
              onChange={this.handleInputChange}
              value="1"
            ></output>
          </div>
          <div className="form-group">
            <input type="button" value="Fix task" onClick={this.FixTask} />
          </div>
        </form>
      </div>
    );
  }
}

export default FixTask;
