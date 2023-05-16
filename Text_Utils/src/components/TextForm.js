import React ,{useState} from "react";

export default function TextForm(props)
{
    const [text ,setText] = useState("");
    //text = "New state" //NA
    //setText("New Text");
    let newText = "";

    const handleUpperClick = ()=>
    {
        //console.log("Uppercase was clicked" + text);
        newText = text.toUpperCase();
        setText(newText);
        props.insertIntoAlert("Converted To Uppercase !" ,"success");
    }

    const handleLowerClick = ()=>
    {
        //console.log("Lower Button Clicked!!!!");
        newText = text.toLowerCase();
        setText(newText);
        props.insertIntoAlert("Converted to LowerCase !" ,"success");   
    }

    const handleOnChange = (event)=>
    {
        //console.log("Changed!!!" );
        setText(event.target.value);
    }

    const handleWhiteSpaces = ()=>
    {
        newText = text.replace(/\s+/g,"");
        setText(newText);
        props.insertIntoAlert("White Spaces Removed!!" ,"success");
    }

    const handleClear = ()=>
    {
        newText = "";
        setText(newText);
        props.insertIntoAlert("TextBox Cleared !!" ,"success");
    }

    return (
        <div>
            <div className= {`container text-${props.mode === "light" ? "dark":"light"}`}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" 
                    style={{backgroundColor : props.mode === "dark" ? "black" : "white" ,color : props.mode === "dark"? "white":"black"}} rows="8">
                    </textarea>
                </div>

                <button className="btn btn-primary mx-1 my-1" disabled = {text.length === 0} onClick={handleUpperClick} >
                    Convert To Uppercase
                </button>

                <button className="btn btn-primary mx-1 my-1" disabled = {text.length === 0} onClick={handleLowerClick} >
                    Convert To Lowercase
                </button>

                <button className="btn btn-primary mx-1 my-1" disabled = {text.length === 0} onClick={handleWhiteSpaces} >
                    Remove WhiteSpaces
                </button>

                <button className="btn btn-primary mx-1 my-1" disabled = {text.length === 0} onClick={handleClear} >
                    Clear Text
                </button>
            </div>

            <div className= {`container my-4 text-${props.mode === "light" ? "dark":"light"}`}>

                <h1>Your Text Summary</h1>

                <p><b>{text.split(" ").filter((element)=> {return element.length !== 0}).length} </b> 
                words and <b>{text.length}</b> characters</p>

                <p>{0.008 * text.split(" ").filter((element)=> {return element.length !== 0}).length} Minutes to Read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text:"Nothing to Preview"}</p>
            </div>

        </div>
    );
}