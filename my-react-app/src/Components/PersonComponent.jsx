import React from "react";

//CLASS COMPONENT
class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "nora",
      age: 30,
    };
  }
  change = () => {
    this.setState({ name: "safa" });
  };
  render() {
    return (
      <div>
        <h1>This is a class component</h1>
        <p>
          My name is {this.state.name} and i am {this.state.age}
        </p>
        <button onClick={this.change}>change the name</button>
      </div>
    );
  }
}

//FUNCTION COMPONENT

// function Person1() {
//   return (
//     <div>
//       <h1>This is a function component</h1>
//       <Person />
//     </div>
//   );
// }

export default Person;
