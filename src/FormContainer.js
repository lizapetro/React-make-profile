import React, {Component} from "react"
import FormComponent from './FormComponent';

class Form extends Component {

    handleChange(event){
      const {name,value,checked,type}=event.target;
      if (type==='checkbox'){
        this.setState({[value]:checked});
      }else{
        this.setState({[name]:value})
      }
      
      

    }

    constructor() {
        super()
        this.state = {
          firstName:'',
          lastName:'',
          age:'',
          gender:'',
          place:'',
          dietaryRestrictions:'',
          isVegan: false,
          isKosher:false,
          isLactoseFree:false
        }
        this.handleChange=this.handleChange.bind(this);

    }
    
    render() {
      return(
      <FormComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
      )
      
    }
}

export default Form