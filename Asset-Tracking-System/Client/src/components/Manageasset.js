import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

//EmpID info
//Asset id
function Manageasset() 
{
    const [employeeId ,setEmployeeId] = useState("");
    const [assignmentDate ,setAssignmentDate] = useState("");
    const [assetId ,setAssetId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Check whether the employee exists
        const response = await fetch(`http://localhost:3100/employee/${employeeId}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        //console.log(response.status);
        if(response.status === 404 || response.status === 500)
        {
            console.log("Employee dosent exist");
        }
        else
        {
            
        }

    };

    return (
        <div>
            <Link to="/searchasngasset" className='btn btn-outline-info my-2 mx-3'>View Allocated Assets</Link>
            
            <div style={styles.container}>
            <h2>Asset Handover</h2>
            <form onSubmit={handleSubmit}>

                <label style={styles.label}>
                    Employee UID :
                    <input
                        style={styles.input}
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />
                </label>
                
                <label style={styles.label}>
                    Asset Id:
                    <input
                        style={styles.input}
                        type="text"
                        value={assetId}
                        onChange={(e) => setAssetId(e.target.value)}
                    />
                </label>

                <label style={styles.label}>
                    Assignment Date:
                    <input
                        style={styles.input}
                        type="date"
                        value={assignmentDate}
                        onChange={(e) => setAssignmentDate(e.target.value)}
                    />
                </label>

                

                <button style={styles.button} type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}

const styles = {

    container: {

        width: '300px',

        margin: 'auto',

        padding: '20px',

        border: '1px solid #ccc',

        borderRadius: '5px',

        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

    },

    label: {

        display: 'block',

        marginBottom: '10px',

        fontWeight: 'bold',

    },

    input: {

        width: '100%',

        padding: '8px',

        border: '1px solid #ccc',

        borderRadius: '3px',

    },

    button: {

        backgroundColor: '#007bff',

        color: 'white',

        border: 'none',

        padding: '10px 20px',

        borderRadius: '3px',

        cursor: 'pointer',

    },

};


export default Manageasset;