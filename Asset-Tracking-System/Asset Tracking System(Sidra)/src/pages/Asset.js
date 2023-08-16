import React, {useState} from "react";


export function Asset(){

    const [content, setContent] = useState(<AssetList showForm={showForm}/>);
    function showList(){
        setContent(<AssetList showForm={showForm}/>);
    }
    function showForm(){
        setContent(<AssetForm showList={showList}/>);
    }

    return(
        <div className="container my-5">
            {content}
            {/* <EmployeeList /> */}
            {/* <EmployeeForm /> */}

        </div>
    );
}

function AssetList(props){
    return(
        <>
        <h2 className="text-center-mb-3">List of Asset</h2>
        <button onClick={() => props.showForm()} type="button" className="btn btn-primary me-2">Create</button>
        </>
    );
}

function AssetForm(props){
    return(
        <>
        <h2 className="text-center-mb-3">Asset Form</h2>
        <button onClick={() => props.showList()} type="button" className="btn btn-secondary me-2">Cancel</button>
        </>
    );
}