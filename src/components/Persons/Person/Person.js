import React,{Component} from 'react';
import './Person.css';

class Person extends Component {
  constructor(props){
    super(props);
    console.log("[Person.js] Inside Constructor",props); 

  }
  componentWillMount(){
    console.log("inside Person.js componentWillMount");
  }
  componentDidMount(){
    console.log("inside Person.js componentDidMount");
  }
  render() {
    console.log('Inside Person.js render()');
    return (
        <div className="Person">
          <p onClick={this.props.click}>
            I'm {this.props.name} and {this.props.age} years old.
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    )
  }
}


export default Person;