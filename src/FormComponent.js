import React from 'react';

function FormComponent(props){
	return (
            <main>
                <form>
                    <input onChange={props.handleChange} name='firstName' placeholder="First Name" value={props.data.firstName}/><br />
                    <input onChange={props.handleChange} name='lastName' placeholder="Last Name" value={props.data.lastName}/><br />
                    <input onChange={props.handleChange} name='age' placeholder="Age" value={props.data.age}/><br />
                    <label >
                      <input type='radio' name='gender' value='men'onChange={props.handleChange}/>Мужчина
                    </label>
                    <label >
                      <input type='radio' name='gender' value='women'onChange={props.handleChange}/>Женщина
                    </label>
                    <br />
                    <select name='place' onChange={props.handleChange} value={props.data.place}>
                      <option value=''>-- Please Choose a destination --</option>
                      <option value='Moscow'>Moscow</option>
                      <option value='India'>India</option>
                      <option value='USA'>USA</option>
                    </select>
                    <br />
                    
                    <label>
                      <input onChange={props.handleChange} name='dietaryRestrictions' value='isVegan' type='checkbox'/>isVegan
                    </label>
                    <label>
                      <input onChange={props.handleChange} name='dietaryRestrictions' value='isKosher' type='checkbox' />isKosher
                    </label>
                    <label>
                      <input onChange={props.handleChange} name='dietaryRestrictions' value='isLactoseFree' type='checkbox' />isLactoseFree
                    </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.place}</p>
                <p>
                    Your dietary restrictions: 
                    {(props.data.isVegan) ?'isVegan ':''}
                    {props.data.isKosher?'isKosher ':''}
                    {props.data.isLactoseFree?'isLactoseFree ':''}
                </p>
            </main>
        )
}

export default FormComponent;