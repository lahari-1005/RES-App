import {useState} from "react"
import React from "react";
class User extends React.Component{
    

constructor(props){
    super(props)
console.log("Child Constructed");
    
}
componentDidMount(){
    console.log("child did mounted");
}
render(){
return(
    console.log("Child rendered"),
    <div className="userc">
        {/* <h1></h1> */}
        <h2> Name: {this.props.name}</h2>
        <h3>Location: Overland park</h3>
        <h4>Email: Laharikanagala5@gmail.com</h4>
    </div>
  );
};
};
export default User;