
import React from "react";
class PureComponent2 extends React.Component{
    render(props){
        console.log('component clicked');
        return(
            <div>
                <h1>Pure Component : {this.props.count}</h1>

            </div>
        )
    }
}

export default PureComponent2;