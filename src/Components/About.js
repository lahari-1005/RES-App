import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructed");
    };
componentDidMount(){
    console.log("Parent Mounted");
}
    
render() {
    return(
        console.log("parent rendered"),
        <div>
             <h1>About Us</h1>
             <h2>This is  about us </h2>
              <User name={"Lahari (function)"} />
              <UserClass name={"Dimpu (Class)"} location={"Hyderabad (Class)"} />
        </div>    
    );
};
};
export default About;