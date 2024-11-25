import React from "react";

//CLASS COMPONENT
class Person extends React.Component {
  constructor(props) {
    super(props);
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


//PROPS

// function Person(){
//     <Person1 lastname ={'john'}>
//         <h1>Hello i am first child</h1>
//         <h2>Hello i am second child</h2>
//     </Person1>
// }


// function Person1(props){
//     return(
//     <h1> Hi i am a function componentn, my name is {props.lastname} {props.child}</h1>
   
//     )
// }



export default Person;
