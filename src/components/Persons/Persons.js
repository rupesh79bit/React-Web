import React,{PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
    this.lastPersonRef=React.createRef();
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

  componentDidMount() {
    console.log("Inside Persons.js componentDidMount");
    this.lastPersonRef.current.focus();
  }

  render() {
    console.log("Inside Persons.js Render()");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          position={index}
          age={person.age}
          key={person.id} 
          ref={this.lastPersonRef}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
  
}


export default Persons;      
