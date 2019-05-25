import React from 'react'
import classes from './Cockpit.module.css';
import Aux from '../../hoc/Auxiliary';

const cockpit = (props)=>{
    const assignedClasses = [];
    let btnclass = classes.Button;
    if(props.showPersons){
        btnclass = [classes.Button,classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <Aux>
        <h1>Hello I am React developer</h1>
        <p className={assignedClasses.join(" ")}>
          This is really working!!
        </p>
        <button className={btnclass} onClick={props.clicked}>
          Toggle Persons
        </button>
      </Aux>
    ); 
}

export default  cockpit;