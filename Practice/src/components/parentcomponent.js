import { Component } from "react";
import React  from "react";
import ChildComponent from "./childcomponent";

class ParentComponent extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            parentName : "Parent"
        };

        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(str)
    {
        alert(`Hello ${this.state.parentName} from ${str}`);
    }

    render()
    {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent;