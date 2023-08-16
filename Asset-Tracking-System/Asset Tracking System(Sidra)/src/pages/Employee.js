import React, {useState} from "react";


export function Employee(){
    const [content, setContent] = useState(<EmployeeList showForm={showForm}/>);
    function showList(){
        setContent(<EmployeeList showForm={showForm}/>);
    }
    function showForm(){
        setContent(<EmployeeForm showList={showList}/>);
    }

    return(
        <div className="container my-5">
            {content}
            {/* <EmployeeList /> */}
            {/* <EmployeeForm /> */}

        </div>
    );
}

    
function EmployeeList(props){
    return(
        <>
        <h2 className="text-center-mb-3">List of Employee</h2>
        <button onClick={() => props.showForm()}   type="button" className="btn btn-primary me-3">Create</button>
        </>
    );
}
function EmployeeForm(props){
    return(
        <>
        <h2 className="text-center-mb-3">Employee Form</h2>
        <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Cancel</button>
        </>
    );
}