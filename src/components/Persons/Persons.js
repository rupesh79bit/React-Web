import React,{PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }
  componentWillMount() {
    console.log(" inside Persons.js componentWillMount");
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      "[Update Persons.js] Inside componentWillReceiveProps()",
      nextProps
    );
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[Update Persons.js] Inside shouldComponentUpdate()",
  //     nextProps,
  //     nextState
  //   );
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.click !== this.props.click;
  //  // return true;
  // }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[Update Persons.js] Inside componentWillUpdate()",
      nextProps,
      nextState
    );
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(
      "[Update Persons.js] Inside componentDidUpdate()",
      nextProps,
      nextState
    );
  }
  render() {
    console.log("Inside Persons.js Render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
  componentDidMount() {
    console.log("Inside Persons.js componentDidMount");
  }
}


export default Persons;      
