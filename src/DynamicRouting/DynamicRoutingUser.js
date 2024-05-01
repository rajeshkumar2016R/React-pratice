
import {withRouter} from 'react-router-dom'
const DynamicRoutingUser = (props) => {
    console.log(props)
    return(
        <div>
            <h1>User Component {props.match.params.id}</h1>
            <h1>User Component name: {props.match.params.name}</h1>
        </div>
    )
}

export default withRouter(DynamicRoutingUser);