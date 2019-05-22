import React,{Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: "asdf", name: "Max", age: 26 },
      { id: "zxcv", name: "Dev", age: 25 },
      { id: "qwer", name: "Stephanie", age: 22 }
    ],
    otherProperty: null
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonhandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = <div />;
   

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonhandler}
            changed={this.nameChangeHandler}/>
    }

    

    return (
      <div className={classes.App}>
       <Cockpit 
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
