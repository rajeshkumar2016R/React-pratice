
import './Student.css';
const Student = (props) => {
    return(
        <div className="student-component">
            <h2>Hello {props.name}</h2>
            <h4>E-mail: {props.email}</h4>
            <h6>{props.other.mob}</h6>
        </div>
    )
}
export default Student;