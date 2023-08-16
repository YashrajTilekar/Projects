import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

function Manageasset() 
{
   

    return (
        <div>
            <Link to="/searchasngasset" className='btn btn-outline-info my-2 mx-3'>View Allocated Assets</Link>
        </div>
    )
}

export default Manageasset;