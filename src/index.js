import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class TodoInput extends React.Component {
  state = {
    value: ""
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.onAddItem(this.state.value);
            this.setState({ value: "" });
          }}
        >
          Add item
        </button>
      </div>
    );
  }
}
class TodoList2 extends React.Component {
  state = {};

  componentDidMount() {
    console.log("mounted");
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

class TodoItem2 extends React.Component {
  state = {};

  render() {
    return <li>{this.props.text}</li>;
  }
}

function TodoList(props) {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
}

function TodoItem(props) {
  return <li>{props.text}</li>;
}

class App extends React.Component {
  state = {
    todos: ["item1", "item2", "item3", "item4"]
  };

  render() {
    return (
      <div>
        <TodoInput
          onAddItem={item => {
            this.setState({ todos: this.state.todos.concat(item) });
          }}
        />
        <TodoList2>
          {this.state.todos.map(text => (
            <TodoItem2 text={text} />
          ))}
        </TodoList2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
