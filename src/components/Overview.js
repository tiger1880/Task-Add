import React, {Component} from "react";

class Overview extends Component {

    constructor(props){

        super(props);

    }

    render(){

        const { List } = this.props; 

        return (
        <ul>
            {
                List.map(item => <li key={item.id}>{item.text}</li>)    
            }
        </ul>);
    }
}

export default Overview;