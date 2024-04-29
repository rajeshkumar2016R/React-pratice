import React from "react";
import Table from 'react-bootstrap/Table';
const ArrayList = () => {
    const Student = [
        { name: 'Raja', email: 'raja@gmail.com', contact: 888 },
        { name: 'Rajesh', email: 'rajesh@gmail.com', contact: 777 },
        { name: 'Raj', email: 'raj@gmail.com', contact: 666 },
    ];
    return (
        <div className="table">
            <h1>TABLE</h1>
            <Table striped variant="dark">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
                {
                    Student.map((data,i)=> 
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    )


}
export default ArrayList;