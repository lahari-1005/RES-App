import React from "react";
class UserClass extends React.Component{
    constructor(props){
    super(props);
    this.state={
        count:0,
        count1:1,
     };
    }

    render(){
        const{name,location}=this.props
        const{count,count1}=this.state
        return(
            <div className="userc">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    });
                }}></button>
                <h2> Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Email: Laharikanagala5@gmail.com</h4>
            </div>
          );
        };
    };
export default UserClass;