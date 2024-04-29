import React,{PureComponent} from "react";
import PureComponent2 from "./PureComponent2";
class PureComponen extends PureComponent {
    constructor(){
        super();
        this.state = {
            count:1
        }
    }
    render() {
        return (
            <div>
                <PureComponent2 count={this.state.count}/>
                <button onClick={()=>this.setState({count: this.state.count+1})}>Update Count</button>
            </div>
        )
    }
}

export default PureComponen;