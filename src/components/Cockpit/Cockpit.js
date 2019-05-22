import React from 'react'
import classes from './Cockpit.module.css'

const cockpit = (props)=>{
    const assignedClasses = [];
    let btnclass = "";
    if(props.showPersons){
        btnclass = classes.Red;
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.Cockpit}>
        <h1>Hello I am React developer</h1>
        <p className={assignedClasses.join(" ")}>
          This is really working!!
        </p>
        <button 
         className={btnclass} 
         onClick={props.clicked}>Toggle Persons
         </button>  
      </div>
    ); 
}

export default  cockpit;