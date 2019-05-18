import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state={
        persons:[
            { name:"Max", age:26},
            { name:"Dev", age:25},
            { name:"Stephanie", age:22}
        ],
        otherProperty:null
    }

nameChangeHandler=(event)=>{
this.setState({
    persons:[
        { name:"Max!!", age:26},
        { name:event.target.value, age:25},
        { name:"Stephanie", age:22}
    ]
});
}

deletePersonhandler=(personIndex) => {
const persons=this.state.persons.slice();
persons.splice(personIndex,1);
this.setState({persons:persons})
}

togglePersonsHandler=()=>{
const doesShow=this.state.showPersons;
this.setState({showPersons:!doesShow})
}

render(){

    const style={
        backgroundColor:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
    };
let persons=null;
if(this.state.showPersons){
    persons=(
        
<div>
        {this.state.persons.map((person,index)=>{
            return <Person
            click={()=>this.deletePersonhandler(index)}
            name={person.name}
            age={person.age}/>
        })}
</div>
    );
}


    return (
    <div className="App">
      <h1>Hello I am React developer</h1>
      <button 
       style={style}
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}
    </div>
    );
}
}

export default App;
