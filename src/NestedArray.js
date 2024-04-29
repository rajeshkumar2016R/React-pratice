
import { Table } from "react-bootstrap";
const NestedArray = () => {
    const users = [
        {
            name: 'Raja', email: 'raja@gmail.com', address: [
                { hn: 45, town: 'Delhi', country: 'India' },
                { hn: 40, town: 'noida', country: 'India' },
                { hn: 42, town: 'pune', country: 'India' },
            ]
        },
        {
            name: 'Rajesh', email: 'rajesh@gmail.com', address: [
                { hn: 45, town: 'Delhi', country: 'India' },
                { hn: 40, town: 'noida', country: 'India' },
                { hn: 42, town: 'pune', country: 'India' },
            ]
        },
        {
            name: 'Raj', email: 'raj@gmail.com', address: [
                { hn: 45, town: 'Delhi', country: 'India' },
                { hn: 40, town: 'noida', country: 'India' },
                { hn: 42, town: 'pune', country: 'India' },
            ]
        },
    ];
    return (
        <div>
            <h1>NestedArray List</h1>
            <Table variant="dark">
                <tbody>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                    {
                        users.map((data,i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Table striped variant="dark">
                                        <tbody>
                                            {
                                                data.address.map((items) =>
                                                    <tr>
                                                        <td>{items.hn}</td>
                                                        <td>{items.town}</td>
                                                        <td>{items.country}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default NestedArray;